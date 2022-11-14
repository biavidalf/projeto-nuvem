import NavBar from '../components/Navbar';
import Title from '../components/Title';
import Navigate from '../components/Navigate';
import {DoughnutChart} from '../components/DoughnutChartDemo';

function AtividadeContainer(){
  return ( 
    <div className="w-76 bg-white w-80 px-8 py-6 text-blue flex flex-col gap-1 items-center rounded drop-shadow-md justify-center">
        <div className="w-full flex justify-between items-center">
          <div className="text-xl font-semibold">Atividade 1</div>
          <div className="font-medium border border-1 border-green-600 text-green-600 px-6 py-1 rounded">ABERTO</div>
        </div>
        
        <div className="w-44"><DoughnutChart /></div>
        
      <div className="w-full flex justify-between items-center ">
           <Navigate text="Ver entregas" path="/login" type="2" weight='font-normal' />
          <div className="text-md font-medium mt-2">Prazo: 21/10</div>
        </div>
     
    </div>
  )
}

export default function ProfView() {
  return (
    <div className="w-full bg-blue min-h-100vh pb-14">
      <nav>
        <NavBar />
      </nav>

      <main className="flex flex-col items-start justify-start gap-8 min-h-screen max-w-screen-lx mx-auto px-8">
        <div className='w-full'>
          <Title text="Atividades" color="white"/>
          <div className='w-full flex items-center justify-between'>
            <AtividadeContainer />
            <AtividadeContainer />
            <AtividadeContainer />
          </div>
        </div>
      </main>
    </div>
  )
}