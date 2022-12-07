import NavBar from '../components/Navbar';
import Title from '../components/Title';
import Prova from '../components/Prova';
import Nota from '../components/Nota';
import ShortcutButton from '../components/ShortcutButton';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { usuarioLogadoMatricula } from '../../server/staticData/loginData';
import AtividadesAluno from '../components/AtividadesAluno';
 
function GradeTile({ text, withBg }) {
  return (
    <div className={withBg == 'true' ? 'drop-shadow-md bg-white py-2 text-blue' : 'py-2 text-blue font-medium'}>
      {text}
    </div>
  )
}
 
export default function AlunoView() {
  const [userLogado, setUserLogado] = useState('');
  const [turmasUser, setTurmasUser ] = useState('');
  
  useEffect(() => {
    getUser();
    getTurmas();
  }, [])

  const getUser = () => {
    axios.get(`https://backend-server-nuvem.vercel.app/aluno/${usuarioLogadoMatricula}`)
      .then((response) => {
          const aluno = response.data;
          setUserLogado(aluno);
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  const getTurmas = () => {
    axios.get(`https://backend-server-nuvem.vercel.app/turma`, {codigos: userLogado.turmas})
    .then((response) => {
        const turmas = response.data;
        setTurmasUser(turmas);
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
          <Title text="Minhas Médias" color="white" />
          <div className="flex">
            <div className="w-1/2 grid grid-cols-7 gap-4 text-center border border-1 drop-shadow-md bg-white p-6 pr-8 rounded">
              <div></div>
              <GradeTile text="IHC" withBg='false' />
              <GradeTile text="RMS" withBg='false' />
              <GradeTile text="DSN" withBg='false' />
              <GradeTile text="ADS" withBg='false' />
              <GradeTile text="EE" withBg='false' />
              <GradeTile text="POO" withBg='false' />
 
              <GradeTile text="AV1" withBg='false' />
              <GradeTile text="7.0" withBg='true' />
              <GradeTile text="7.0" withBg='true' />
              <GradeTile text="7.0" withBg='true' />
              <GradeTile text="7.0" withBg='true' />
              <GradeTile text="7.0" withBg='true' />
              <GradeTile text="7.0" withBg='true' />
 
              <GradeTile text="AV2" withBg='false' />
              <GradeTile text="7.0" withBg='true' />
              <GradeTile text="7.0" withBg='true' />
              <GradeTile text="7.0" withBg='true' />
              <GradeTile text="7.0" withBg='true' />
              <GradeTile text="7.0" withBg='true' />
              <GradeTile text="7.0" withBg='true' />
 
              <GradeTile text="AV3" withBg='false' />
              <GradeTile text="7.0" withBg='true' />
              <GradeTile text="7.0" withBg='true' />
              <GradeTile text="7.0" withBg='true' />
              <GradeTile text="7.0" withBg='true' />
              <GradeTile text="7.0" withBg='true' />
              <GradeTile text="7.0" withBg='true' />
            </div>
 
            <div className="w-1/2 text-center flex flex-wrap justify-center items-center gap-x-4 py-10">
              <ShortcutButton text="Disciplinas" />
              <ShortcutButton text="Notas" />
              <ShortcutButton text="Pendências" />
              <ShortcutButton text="Conta" />
            </div>
          </div>
 
        </div>
        {/* ATIVIDADES PENDENTES */}
        <div className="w-full">
          <Title text="Atividades Pendentes" color="white" />
          <div className="w-full flex flex-wrap justify-between gap-y-6">
            {
              turmasUser &&
              <AtividadesAluno turmas={turmasUser}/>
            }
          </div>
        </div>
 
        {/* TURMAS */}
        <div className="w-full">
          <Title text="Minhas Turmas" color="white" />
          <div className="w-full flex flex-wrap justify-between gap-y-6">
            {turmasUser && 
              Object.keys(turmasUser).map((turma, index) => {
                return(
                    <Prova text={turmasUser[turma].codigo} discipline={turmasUser[turma].disciplina.nome} date="" buttonTitle="Ir" />
                )
              })
            }
          </div>
        </div>

 
 
        <div className="w-full">
          <Title text="Minhas Notas" color="white" />
          <div className="w-full flex flex-wrap justify-between gap-y-6">
            <Nota />
            <Nota />
          </div>
        </div>
       
      </main>
    </div>
  )
}
