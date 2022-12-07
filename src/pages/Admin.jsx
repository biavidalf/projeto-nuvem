import axios from 'axios';
import { useEffect } from 'react'
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Table from "../components/Table";
import Input from "../components/Input";

function AdminNavbar(){
    return (
        <div>
        <nav className="bg-white border-gray-200 dark:bg-[#011f4b]">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-16 py-2.5">
                    <a href="https://flowbite.com" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Power Grade</span>
                    </a>
                    <div className="flex items-center text-white">
                        <FaUserCircle className="text-4xl" />
                    </div>
                </div>
            </nav>
    </div>
    )
}


function AlunoPage(){
    const [isCadastrarClicked, setIsCadastrarClicked] = useState(false);

    const [alunos, setAlunos] = useState([]);

    const url = 'http://https://backend-server-nuvem.vercel.app/aluno';
    
    useEffect(() => {
        getAlunos();
    }, []);
    
    const getAlunos = () => {
        axios.get(url)
        .then((response) => {
            const allAlunos = response.data;
            setAlunos(allAlunos);
            console.log(alunos);
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [curso, setCurso] = useState('');
    const [senha, setSenha] = useState('');

    const changeMatricula = (e) => {
        setMatricula(e.target.value);
    }
    const changeNome = (e) => {
        setNome(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changeTelefone = (e) => {
        setTelefone(e.target.value);
    }
    const changeCurso = (e) => {
        setCurso(e.target.value);
    }
    const changeSenha = (e) => {
        setSenha(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const aluno = {
            matricula: parseInt(matricula),
            nome,
            email,
            telefone,
            curso,
            senha,
            semestre: 1,
            turmas: []
        }
        
        axios.post(url, aluno)
            .then(response => {
                console.log(response.data);
                getAlunos();
            })
        
        setIsCadastrarClicked(false);
        setMatricula('');
        setNome('');
        setEmail('');
        setTelefone('');
        setCurso('');
        setSenha('');
    }
    
    const renderPage = () => {
        if(isCadastrarClicked) {
            return (
                <form onSubmit={onSubmit} className="w-3/4 bg-white rounded py-6 px-12 mt-3 flex flex-col items-center m-auto gap-y-2">
                    <h2 className="text-blue font-semibold text-xl">Cadastrar Aluno</h2>

                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col items-center justify-between w-32">
                            <label className="text-slate-700 text-left w-full">Matrícula</label>
                            <input type="number" onChange={changeMatricula} value={matricula} className="px-4 py-2 border border-1 border-slate-300 w-full" required />
                        </div>
                        
                        <div className="flex flex-col items-center justify-between w-80">
                            <label className="text-slate-700 text-left  w-full ">Nome</label>
                            <input type="text" onChange={changeNome} value={nome} className="px-4 py-2 border border-1 border-slate-300 w-full" required />
                        </div>
                    </div>

                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col items-start justify-between w-[49%]">
                            <label className="text-slate-700 text-left  w-full">E-mail</label>
                            <input type="email" onChange={changeEmail} value={email} className="px-4 py-2 border border-1 border-slate-300 w-full" required />
                        </div>
                        
                        <div className="flex flex-col items-start justify-between w-[49%]">
                            <label className="text-slate-700 text-left  w-full">Senha</label>
                            <input type="password" onChange={changeSenha} value={senha} className="px-4 py-2 border border-1 border-slate-300 w-full" required />
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col items-start justify-between w-[49%]">
                            <label className="text-slate-700 text-left  w-full">Telefone</label>
                            <input type="text" onChange={changeTelefone} value={telefone} className="px-4 py-2 border border-1 border-slate-300 w-full" required />
                        </div>
                        
                        <div className="flex flex-col items-start justify-between w-[49%]">
                            <label className="text-slate-700 text-left w-full">Curso</label>
                            <select  onChange={changeCurso} value={curso} className="px-4 py-2 border border-1 border-slate-300 w-full" required>
                                <option value="">-- ESCOLHA --</option>
                                <option value="cienciaComputacao">Ciência da Computação</option>
                                <option value="analiseDesenvolvimentoSistemas">Análise e Desenvolvimento de Sistemas</option>
                                <option value="sistemasInformacao">Análise e Desenvolvimento de Sistemas</option>
                                <option value="engenhariaComputacao">Análise e Desenvolvimento de Sistemas</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="text-blue border border-2 border-blue hover:bg-blue  hover:text-white focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-lg px-12 py-2.5 mt-2">
                            Cadastrar
                        </button>
                    </div>
                </form>
            );
        }else {
            return (<Table persons={alunos} />);
        }
    };

    const setCadastro = () => {
        setIsCadastrarClicked(!isCadastrarClicked);
    };
    return (
        <div className="w-full h-96 flex flex-col items-center justify-start">
            <div className="w-full flex justify-between items-center">
                <div className="text-white font-semibold text-2xl">Alunos</div>
                <button onClick={setCadastro} className="bg-white text-blue font-semibold text-lg px-6 py-2 rounded">Cadastrar Aluno</button>
            </div>
            <div className="w-full flex justify-between items-center">
                {renderPage()}
            </div>
        </div>
    );
}

function ProfessorPage(){
    return (
        <div className="w-full h-96 flex flex-col items-center justify-start">
            <div className="w-full flex justify-between items-center">
                <div className="text-white font-semibold text-2xl">Professores</div>
                <button className="bg-white text-blue font-semibold text-lg px-6 py-2 rounded">Cadastrar Professor</button>
            </div>
            <div className="w-full flex justify-between items-center">
                <Table />
            </div>
        </div>
    );
}

function TurmaPage(){
    return (
        <div className="w-full h-96 flex flex-col items-center justify-start">
            <div className="w-full flex justify-between items-center">
                <div className="text-white font-semibold text-2xl">Turmas</div>
                <button className="bg-white text-blue font-semibold text-lg px-6 py-2 rounded">Cadastrar Turma</button>
            </div>
            <div className="w-full flex justify-between items-center">
                <Table />
            </div>
        </div>
    );
}

export default function Admin(){
    const [pageName, setPageName] = useState();
    
    const renderPage = () => {
        if(pageName == 'aluno') {
            return (<AlunoPage />);
        }else if(pageName == 'professor') {
            return (<ProfessorPage />);
        }else if(pageName == 'turma') {
            return (<TurmaPage />);
        }else if(pageName == 'home') {
            return ('');
        }
    };

    const setAluno = () => {
        setPageName('aluno');
    };
    const setProfessor = () => {
        setPageName('professor');
    };
    const setTurma = () => {
        setPageName('turma');
    };
    const setHome = () => {
        setPageName('home');
    };

    return (
        <div>
            <AdminNavbar />
            <nav className="bg-gray-50 dark:bg-[#03396c]">
                <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-16">
                    <div className="flex items-center">
                        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            <li>
                                <button onClick={setHome} className="text-[#011f4b] dark:text-white hover:underline">Home</button>
                            </li>
                            <li>
                                <button onClick={setAluno} className="text-[#011f4b] dark:text-white hover:underline">Alunos</button>
                            </li>
                            <li>
                                <button onClick={setProfessor} className="text-[#011f4b] dark:text-white hover:underline">Professores</button>
                            </li>
                            <li>
                                <button onClick={setTurma} className="text-[#011f4b] dark:text-white hover:underline">Turmas</button>
                            </li>
                            <li>
                                <button className="text-[#011f4b] dark:text-white hover:underline">Cursos</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="h-screen bg-blue w-full pt-10">
                <div className="max-w-screen-md m-auto">
                    {renderPage()}

                </div>
            </main>
        </div>
    )
}