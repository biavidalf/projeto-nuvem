import { useState, useEffect } from "react";
import axios from 'axios';
import { cursos } from '../../server/staticData/cursos';
import { disciplinas } from '../../server/staticData/disciplinas';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = (type, message) => {
    const config = {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    }
    type == 'sucesso' ? toast.success(message, config) : toast.error(message, config);
}

export default function RegisterForm({endpoint, buttonClick, getData}){
    const url = 'http://localhost:3000/' + endpoint;

    const [professores, setProfessores] = useState([]);

    useEffect(() => {
        getProfessores();
    }, [])
    
    const getProfessores = () => {
        axios
          .get('http://localhost:3000/professor')
          .then((response) => {
            setProfessores(response.data);
          })
          .catch((error) => console.error(`Error: ${error}`));
    };

    if(endpoint == 'aluno'){
        const [matricula, setMatricula] = useState('');
        const [nome, setNome] = useState('');
        const [email, setEmail] = useState('');
        const [telefone, setTelefone] = useState('');
        const [curso, setCurso] = useState('');
        const [senha, setSenha] = useState('');
        
        const onSubmit = (e) => {
            e.preventDefault();
            const aluno = {
                matricula: parseInt(matricula),
                nome,
                email,
                telefone,
                curso: {id: curso, nome: cursos[curso].nome},
                senha,
                semestre: 1,
                turmas: []
            }
            
            axios.post(url, aluno)
                .then(response => {
                    getData();
                    showToast('sucesso', response.data.message);

                    buttonClick();
                    setMatricula('');
                    setNome('');
                    setEmail('');
                    setTelefone('');
                    setCurso('');
                    setSenha('');
                })
                .catch((error) => {
                    showToast('erro', 'Matrícula já inserida no banco')
                    console.log(error);
                });            
        }

        return(
            <>
            <form onSubmit={onSubmit} className="w-3/4 bg-white rounded py-6 px-12 mt-3 flex flex-col items-center m-auto gap-y-2">
                <h2 className="text-blue font-semibold text-xl">Cadastrar Aluno</h2>

                <div className="flex items-center justify-between w-full">
                    <Input width="w-32" type="number" label="Matrícula" 
                    onChangeFunction={(e) => {
                        setMatricula(e.target.value);
                    }} 
                    valueFunction={matricula} />
                    
                    <Input width="w-80" type="text" label="Nome" 
                    onChangeFunction={
                        (e) => {
                            setNome(e.target.value);
                        }
                    } 
                    valueFunction={nome} />
                </div>

                <div className="flex items-center justify-between w-full">
                    <Input type="email" label="E-mail" 
                    onChangeFunction={
                        (e) => {
                            setEmail(e.target.value);
                        }
                    } 
                    valueFunction={email} />
                    
                    <Input type="password" label="Senha" 
                    onChangeFunction={
                        (e) => {
                            setSenha(e.target.value);
                        }
                    } 
                    valueFunction={senha} />
                </div>

                <div className="flex items-center justify-between w-full">
                    <Input type="text" label="Telefone" 
                    onChangeFunction={
                        (e) => {
                            setTelefone(e.target.value);
                        }
                    } 
                    valueFunction={telefone} />

                    <div className="flex flex-col items-start justify-between w-[49%]">
                    <label className="text-slate-700 text-left w-full">Curso</label>
                        <select  onChange={(e) => {setCurso(e.target.value);}} value={curso} className="px-4 py-2 border border-1 border-slate-300 w-full" required>
                            <option value="">-- ESCOLHA --</option>
                            {Object.keys(cursos).map((curso, index) => {
                                return(
                                    <option key={index} value={curso}>{cursos[curso].nome}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>

                <div>
                    <button type="submit" className="text-blue border border-2 border-blue hover:bg-blue  hover:text-white focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-lg px-12 py-2.5 mt-2">
                        Cadastrar
                    </button>
                </div>
            </form>
            <ToastContainer />
            </>
        );
    }else if(endpoint == 'professor'){
        const [matricula, setMatricula] = useState('');
        const [nome, setNome] = useState('');
        const [email, setEmail] = useState('');
        const [telefone, setTelefone] = useState('');
        const [formacao, setFormacao] = useState('');
        const [senha, setSenha] = useState('');
        
        const onSubmit = (e) => {
            e.preventDefault();
            const professor = {
                matricula: parseInt(matricula),
                nome,
                email,
                telefone,
                formacao,
                senha,
                turmas: []
            }
            
            axios.post(url, professor)
                .then(response => {
                    getData();
                    showToast('sucesso', response.data.message); 
                    
                    buttonClick();
                    setMatricula('');
                    setNome('');
                    setEmail('');
                    setTelefone('');
                    setFormacao('');
                    setSenha('');
                })
                .catch((error) => {
                    showToast('erro', 'Matrícula já inserida no banco')
                    console.log(error);
                });
        }

        return(
            <>
            <form onSubmit={onSubmit} className="w-3/4 bg-white rounded py-6 px-12 mt-3 flex flex-col items-center m-auto gap-y-2">
                <h2 className="text-blue font-semibold text-xl">Cadastrar Professor</h2>

                <div className="flex items-center justify-between w-full">
                    <Input width="w-32" type="number" label="Matrícula" 
                    onChangeFunction={(e) => {
                        setMatricula(e.target.value);
                    }} 
                    valueFunction={matricula} />
                    
                    <Input width="w-80" type="text" label="Nome" 
                    onChangeFunction={
                        (e) => {
                            setNome(e.target.value);
                        }
                    } 
                    valueFunction={nome} />
                </div>

                <div className="flex items-center justify-between w-full">
                    <Input type="email" label="E-mail" 
                    onChangeFunction={
                        (e) => {
                            setEmail(e.target.value);
                        }
                    } 
                    valueFunction={email} />
                    
                    <Input type="password" label="Senha" 
                    onChangeFunction={
                        (e) => {
                            setSenha(e.target.value);
                        }
                    } 
                    valueFunction={senha} />
                </div>

                <div className="flex items-center justify-between w-full">
                    <Input type="text" label="Telefone" 
                    onChangeFunction={
                        (e) => {
                            setTelefone(e.target.value);
                        }
                    } 
                    valueFunction={telefone} />

                    <Input type="text" label="Formação" 
                        onChangeFunction={
                            (e) => {
                                setFormacao(e.target.value);
                            }
                        } 
                        valueFunction={formacao} 
                    />
                </div>

                <div>
                    <button type="submit" className="text-blue border border-2 border-blue hover:bg-blue  hover:text-white focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-lg px-12 py-2.5 mt-2">
                        Cadastrar
                    </button>
                </div>
            </form>

            <ToastContainer />
            </>
        );
    }else if(endpoint == 'turma'){
        const [codigo, setCodigo] = useState('');
        const [disciplinaId, setDisciplinaId] = useState('');
        const [professor, setProfessor] = useState('');
        const [curso, setCurso] = useState('');
        const [semestre, setSemestre] = useState('');
        
        const onSubmit = (e) => {
            e.preventDefault();
            let professorAtual = '';
            for(let prof in professores){
                if(professores[prof].matricula == professor){
                    professorAtual = professores[prof].nome;
                }
            }
            const turma = {
                codigo,
                disciplina: {id: disciplinaId, nome: disciplinas[disciplinaId].nome},
                professor: {id: professor, nome: professorAtual}
            }
            
            axios.post(url, turma)
                .then(response => {
                    getData();
                    showToast('sucesso', response.data.message); 
                    
                    buttonClick();
                    setCodigo('');
                    setDisciplinaId('');
                    setProfessor('');
                    setCurso('');
                    setSemestre('');

                    // adicionar requisição no servidor para passar curso, semestre, turma e professorId
                    // como parametro, para adicionar o codigo na turma na turma[] dos alunos
                    let alunosPorCursoSemestre = [];
                    axios.get(`http://localhost:3000/aluno?semestre=${semestre}&curso=${curso}`)
                        .then(response => {
                            alunosPorCursoSemestre = response.data;
                            console.log('response.data: '+ response.data);
                            
                            if(alunosPorCursoSemestre){
                                for(let aluno in alunosPorCursoSemestre){
                                    let turmasAluno = alunosPorCursoSemestre[aluno].turmas
                                    turmasAluno.push(codigo);
                                    //chamar rota patch passando turma nova )_turmasAluno
                                    axios.put(`http://localhost:3000/aluno/${alunosPorCursoSemestre[aluno].matricula}`, {turmas: turmasAluno})
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                }
                            }
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
        }

        return(
            <>
            <form onSubmit={onSubmit} className="w-3/4 bg-white rounded py-6 px-12 mt-3 flex flex-col items-center m-auto gap-y-2">
                <h2 className="text-blue font-semibold text-xl">Cadastrar Turma</h2>

                <div className="flex items-center justify-between w-full">
                    <Input width="w-32" type="text" label="Código" 
                    onChangeFunction={(e) => {
                        setCodigo(e.target.value);
                    }} 
                    valueFunction={codigo} />
                    
                    <div className="flex items-center justify-between flex-col w-80">
                        <label className="text-slate-700 text-left w-full">Disciplina</label>
                        <select  onChange={(e) => {setDisciplinaId(e.target.value);}} value={disciplinaId} className="px-4 py-2 border border-1 border-slate-300 w-full" required>
                            <option value="">-- ESCOLHA --</option>
                            {Object.keys(disciplinas).map((disciplina, index) => {
                                return(
                                    <option key={index} value={disciplina}>{disciplinas[disciplina].nome}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>

                <div className="flex items-center justify-between flex-col w-full">
                    <label className="text-slate-700 text-left w-full">Professor</label>
                    <select  onChange={(e) => {setProfessor(e.target.value);}} value={professor} className="px-4 py-2 border border-1 border-slate-300 w-full" required>
                        <option value="">-- ESCOLHA --</option>
                        {professores.map((professor, index) => {
                            return(
                                <option key={index} value={professor.matricula}>{professor.nome}</option>
                            )
                        })}
                    </select>
                </div>

                <div className="flex items-center justify-between w-full">
                    <Input width="w-32" type="Number" label="Semestre" 
                    onChangeFunction={(e) => {
                        setSemestre(e.target.value);
                    }} 
                    valueFunction={semestre} />
                    
                    <div className="flex items-center justify-between w-80 flex-col">
                        <label className="text-slate-700 text-left w-full">Curso</label>
                        <select  onChange={(e) => {setCurso(e.target.value);}} value={curso} className="px-4 py-2 border border-1 border-slate-300 w-full" required>
                            <option value="">-- ESCOLHA --</option>
                            {Object.keys(cursos).map((curso, index) => {
                                return(
                                    <option key={index} value={curso}>{cursos[curso].nome}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>

                <div>
                    <button type="submit" className="text-blue border border-2 border-blue hover:bg-blue  hover:text-white focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-lg px-12 py-2.5 mt-2">
                        Cadastrar
                    </button>
                </div>
            </form>

            <ToastContainer />
            </>
        );
    }
}

function Input({width = 'w-[49%]', label, onChangeFunction, valueFunction, type}){
    return (
        <div className={`flex flex-col items-center justify-between ${width}`}>
            <label className="text-slate-700 text-left w-full">{label}</label>
            <input type={type} onChange={onChangeFunction} value={valueFunction} className="px-4 py-2 border border-1 border-slate-300 w-full focus:outline-blue" required />
        </div>
    );
}