import NavBar from '../components/Navbar';
import Title from '../components/Title';
import {DoughnutChart} from '../components/DoughnutChartDemo';
import Navigate from '../components/Navigate';
import { useState, useEffect } from 'react';
import { usuarioLogadoMatricula } from '../../server/staticData/loginData';
import axios from 'axios';

 
function ProvaAberta(){
   return (
     <div className="bg-white rounded py-2 px-8 flex flex-col">
       <div className="flex items-center justify-between">
           <Title text="T163-88" color="blue" />
          <div className="text-blue">Aberta até 23/10</div>
       </div>
 
       <div className="flex items-start justify-between">
         <div className="w-44"><DoughnutChart /></div>
          <div className="w-full mt-4 text-center text-blue flex flex-col items-center justify-center">
            <div className="font-medium">Avaliação 3</div>
            <div className="text-sm">22 alunos entregaram</div>
            <div className="text-sm">8 alunos pendentes</div>
            {/*<button className="bg-blue px-8 py-2 text-white text-lg rounded mt-4 drop-shadow-xl">Ver entregas</button>*/}
            <Navigate text="Ver entregas" path="/turma" type="2" weight='font-normal' />
          </div>
       </div>
      </div>
   )
}
 
function Turma({ disciplina, codigo, qtdAlunos }){
  return (
    <div className="w-60 bg-white w-80 px-8 py-6 text-blue flex flex-col gap-1 items-center rounded drop-shadow-md ">
    <div className="font-bold text-lg text-center">{disciplina}</div>
      <div className="text-md font-medium">{codigo}</div>
      <div className="text-md font-medium">{qtdAlunos} Alunos</div>
      <Navigate text="Ir" path="/turma" type="2" />
    </div>
  )
}
 
export default function ProfView() {
  //const [ professorLogado, setProfessorLogado ] = useState('');
  const [ turmas, setTurmas ] = useState('');
  const [ qtdAlunos, setQtdAlunos ] = useState('');

  useEffect(() => {
    //getUser();
    getTurmas();
  }, [])

  /* const getUser = () => {
    axios.get(`http://localhost:3000/professor/${usuarioLogadoMatricula}`)
      .then((response) => {
          const prof = response.data;
          setProfessorLogado(prof);
      })
      .catch(error => console.error(`Error: ${error}`));
  } */

  const getTurmas = () => {
    axios.get(`http://localhost:3000/turma?professor=${usuarioLogadoMatricula}`)
    .then((response) => {
        const turmas = response.data;
        setTurmas(turmas);
        turmas.map((turma) => {
          axios.get(`http://localhost:3000/aluno?turma=${turma.codigo}&count=true`)
            .then((response) => {
              setQtdAlunos(qtdAlunos => [...qtdAlunos, response.data])
            })
            .catch(error => console.error(`Error: ${error}`))
        })
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  return (
    <div className="w-full bg-blue min-h-100vh pb-14">
      <nav>
        <NavBar />
      </nav>
 
      <main className="flex flex-col items-start justify-start gap-8 min-h-screen max-w-screen-lx mx-auto px-8">
        <div className="w-full">
          <Title text="Provas Abertas" color="white" />
          <div className="w-full flex justify-around">
            <ProvaAberta />
            <ProvaAberta />
          </div>
        </div>
 
        <div className="w-full">
          <Title text="Minhas Turmas" color="white" />
          <div className="w-full flex justify-between">
            {turmas &&
            turmas.map((turma, index) => {
              return (<Turma key={index} disciplina={turma.disciplina.nome} codigo={turma.codigo} qtdAlunos={qtdAlunos[index]}/>)
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
