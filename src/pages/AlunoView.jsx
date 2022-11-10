import NavBar from '../components/Navbar';
import Title from '../components/Title';

function GradeTile({text, withBg}){
  return (
    <div className={withBg == 'true' ? 'drop-shadow-md bg-white py-2' : 'bg-white py-2'}>
      {text}
    </div>
  )
}

export default function AlunoView(){
  return (
    <div>
      <nav>
        <NavBar />
      </nav>

      <main className="flex flex-col items-start justify-start gap-6 h-screen max-w-screen-xl mx-auto px-8">
        <div className="w-full">
          <Title text="Médias"/>
          <div className="w-1/2 grid grid-cols-7 gap-4 text-center border border-1">
            <div></div>
            <GradeTile text="IHC" withBg='false' />
            <GradeTile text="RMS" withBg='false' />
            <GradeTile text="DSN" withBg='false' />
            <GradeTile text="ADS" withBg='false' />
            <GradeTile text="EE" withBg='false' />
            <GradeTile text="POO" withBg='false' />
            <GradeTile text="AV1" withBg='false' />
            <GradeTile text="7.0" withBg='true' />
            <div>AV1</div>
            <div>AV1</div>
            <div>AV1</div>
            <div>AV1</div>
            <div>AV1</div>
          </div>
        </div>
      </main>
    </div>
  )
}