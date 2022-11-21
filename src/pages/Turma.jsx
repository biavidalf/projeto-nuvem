import NavBar from '../components/Navbar';
import Title from '../components/Title';
import Navigate from '../components/Navigate';
import Navigation from '../components/Navigation';
import ShortcutButton from '../components/ShortcutButton';
import { DoughnutChart } from '../components/DoughnutChartDemo';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RegisterForm from '../components/RegisterForm';
 
function AtividadeContainer({ open = true }){
  return (
    <div className="w-76 bg-white w-80 px-8 py-6 text-blue flex flex-col gap-1 items-center rounded drop-shadow-md justify-center">        
        <div className="w-full flex justify-between items-center mb-2">
          <div className="text-xl font-semibold">Atividade 1</div>
          <div className={`font-medium border border-1  px-6 py-1 rounded ${open ? "border-green-600 text-green-600" : "border-red-600 text-red-600"}`}>{`${open ? "ABERTO" : "FECHADO"}`}</div>
        </div>
       
        <div className="w-44"><DoughnutChart /></div>
       
      <div className="w-full flex justify-between items-center ">
           <Navigate text="Ver entregas" path="/login" type="2" weight='font-normal' />
          <div className="text-md font-medium mt-2">Prazo: 21/10</div>
        </div>
     
    </div>
  )
}
 
export default function Turma() {
  const [turma, setTurma] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    getTurmas();
  }, [])

  const getTurmas = () => {
    axios.get(`http://localhost:3000/${window.location.pathname}`)
    .then((response) => {
        const turma = response.data;
        setTurma(turma);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  const renderPage = () => {
    if(isButtonClicked){
      return (
        <div className="w-4/5 m-auto mt-10">
          <RegisterForm endpoint="atividade" codigoTurma={turma.codigo} />
        </div>
        )
    }else{
      return (
        <>
          <Title text="Atividades" color="white"/>
          <div className='w-full flex items-center justify-between'>
            <AtividadeContainer />
            <AtividadeContainer />
            <AtividadeContainer open={false} />
          </div>
        </>
      )
    }
  }
  return (
    turma &&
    <div className="w-full bg-blue min-h-100vh pb-14">
      <nav>
        <NavBar />
      </nav>
 
      <main className="flex flex-col items-start justify-start gap-8 min-h-screen max-w-screen-lx mx-auto px-8">
        <div className='w-full'>
          <Navigation type="1" codigo={turma.codigo} nomeDisciplina={turma.disciplina.nome} />
         
          <div className='w-full flex items-center justify-center gap-12 mb-[-20px] mt-2'>
            <ShortcutButton text="Ver Alunos" width="60"/>
            <ShortcutButton text="Criar Atividade" width="60" onClickFunction={() => {setIsButtonClicked(!isButtonClicked)}}/>
          </div>
          {renderPage()}
        </div>
      </main>
    </div>
  )
}
