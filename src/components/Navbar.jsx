import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { usuarioLogadoMatricula } from '../../server/staticData/loginData';
import axios from 'axios';

export default function Navbar(){
  const [userLogado, setUserLogado] = useState('');
  
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
      axios.get(`http://https://backend-server-nuvem.vercel.app${window.location.pathname == '/aluno' || window.location.pathname == '/professor' ? window.location.pathname : 'professor'}/${usuarioLogadoMatricula}`)
      .then((response) => {
          const aluno = response.data;
          setUserLogado(aluno);
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  return (
    <div className="w-full h-24 flex justify-between items-center px-20 text-white mb-[-15px]">
      <h2 className="text-2xl font-semibold">Power Grade</h2>
      <div className="text-xl font-semibold flex items-center gap-4">
        {/* Matricula e nome do aluno */}
        <p>{userLogado.matricula} | {userLogado.nome}</p> 

        {/* Adicionar dropdown menu */}
        <FaUserCircle className="text-4xl" />
      </div>
    </div>
  )
}