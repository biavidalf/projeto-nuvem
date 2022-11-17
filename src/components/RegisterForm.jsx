import { useState } from "react";
import axios from 'axios';

export default function RegisterForm({endpoint, setIsCadastrarClicked, getData}){
    const url = 'http://localhost:3000/' + endpoint;
    
    if(endpoint == 'aluno'){
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
                    getData();
                })
            
            setIsCadastrarClicked(false);
            setMatricula('');
            setNome('');
            setEmail('');
            setTelefone('');
            setCurso('');
            setSenha('');
        }

        return(
            <form onSubmit={onSubmit} className="w-3/4 bg-white rounded py-6 px-12 mt-3 flex flex-col items-center m-auto gap-y-2">
                    <h2 className="text-blue font-semibold text-xl">Cadastrar Aluno</h2>

                    <div className="flex items-center justify-between w-full">
                        <Input width="w-32" type="number" label="Matrícula" onChangeFunction={changeMatricula} valueFunction={matricula} />
                        
                        <Input width="w-80" type="text" label="Nome" onChangeFunction={changeNome} valueFunction={nome} />
                    </div>

                    <div className="flex items-center justify-between w-full">
                        <Input type="email" label="E-mail" onChangeFunction={changeEmail} valueFunction={email} />
                        
                        <Input type="password" label="Senha" onChangeFunction={changeSenha} valueFunction={senha} />
                    </div>

                    <div className="flex items-center justify-between w-full">
                        <Input type="text" label="Telefone" onChangeFunction={changeTelefone} valueFunction={telefone} />

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