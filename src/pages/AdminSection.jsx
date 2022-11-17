import axios from "axios";
import { useState, useEffect } from "react";
import RegisterForm from "../components/RegisterForm";
import Table from "../components/Table";

export default function AdminSection({type, url}){
    // Type: aluno, professor, turma, curso

    const [isCadastrarClicked, setIsCadastrarClicked] = useState(false);
    const cadastroButtonClicked = () => {
        setIsCadastrarClicked(!isCadastrarClicked);
    };

    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    
    const getData = () => {
        axios.get(url)
        .then((response) => {
            const allData = response.data;
            setData(allData);
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    const renderPage = () => {
        if(isCadastrarClicked) {
            return(
                <RegisterForm endpoint={type} buttonClick={setIsCadastrarClicked} getData={data} />
            )
        }else {
            return (<Table persons={data} />);
        }
    }

    if(type=='aluno'){
        return(
            <Header title="Alunos" button="Cadastrar Aluno" click={cadastroButtonClicked} render={renderPage} />
        )
    }
}

function Header({title, button, click, render}){
    return(
        <div className="w-full h-96 flex flex-col items-center justify-start">
            <div className="w-full flex justify-between items-center">
                <div className="text-white font-semibold text-2xl">{title}</div>
                <button onClick={click} className="bg-white text-blue font-semibold text-lg px-6 py-2 rounded">{button}</button>
            </div>
            <div className="w-full flex justify-between items-center">
                { render() }
            </div>
        </div>
    )
}