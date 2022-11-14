import NavBar from '../components/Navbar';
import Title from '../components/Title';
import Navigate from '../components/Navigate';
import Navigation from '../components/Navigation';
import ShortcutButton from '../components/ShortcutButton';
import {DoughnutChart} from '../components/DoughnutChartDemo';
 
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
 
export default function ProfView() {
  return (
    <div className="w-full bg-blue min-h-100vh pb-14">
      <nav>
        <NavBar />
      </nav>
 
      <main className="flex flex-col items-start justify-start gap-8 min-h-screen max-w-screen-lx mx-auto px-8">
        <div className='w-full'>
          <Navigation />
         
          <div className='w-full flex items-center justify-center gap-12 mb-[-20px] mt-2'>
            <ShortcutButton text="Criar Atividade" width="60"/>
            <ShortcutButton text="Ver Alunos" width="60"/>
          </div>
         
          <Title text="Atividades" color="white"/>
          <div className='w-full flex items-center justify-between'>
            <AtividadeContainer />
            <AtividadeContainer />
            <AtividadeContainer open={false} />
          </div>
        </div>
      </main>
    </div>
  )
}
