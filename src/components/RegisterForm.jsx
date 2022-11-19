import { useState } from "react";
import axios from 'axios';

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
                curso,
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