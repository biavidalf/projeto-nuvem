import NavBar from '../components/Navbar';
import Title from '../components/Title';
import Prova from '../components/Prova';
import Nota from '../components/Nota';

function ShortcutButton({ text }) {
  return (
    <button className="my-4 py-4 w-44 bg-white rounded text-blue font-medium text-xl drop-shadow-xl">{text}</button>
  )
}

function GradeTile({ text, withBg }) {
  return (
    <div className={withBg == 'true' ? 'drop-shadow-md bg-white py-2 text-blue' : 'py-2 text-blue font-medium'}>
      {text}
    </div>
  )
}

export default function AlunoView() {
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

        <div className="w-full">
          <Title text="Atividades Pendentes" color="white" />
          <div className="w-full flex flex-wrap justify-between gap-y-6">
            <Prova text="Avaliacao 2" discipline="IHC" date="29/10" />
            <Prova text="Trabalho 1" discipline="RMS" date="05/10" />
            <Prova text="Atividade 2" discipline="ADS" date="10/10" />
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