import NavBar from '../components/Navbar';
import Navigate from '../components/Navigate';
import Navigation from '../components/Navigation';
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
 
export default function Atividade() {
  return (
    <div className="w-full bg-blue min-h-100vh pb-14">
      <nav>
        <NavBar />
      </nav>
 
      <main className="flex flex-col items-start justify-start gap-8 min-h-screen max-w-screen-lx mx-auto px-8">
        <div className='w-full'>
          <Navigation type="2"/>
        </div>

        <div className='w-full flex flex-col items-center justify-start text-white text-lg'>
          
        </div>
      </main>
    </div>
  )
}

function Input({width = 'w-[49%]', label, onChangeFunction, valueFunction, type}){
  return (
      <div className={`flex flex-col items-center justify-between ${width}`}>
          <label className="text-slate-700 text-left w-full">{label}</label>
          <input type={type} onChange={onChangeFunction} value={valueFunction} className="px-4 py-2 border border-1 border-slate-300 w-full focus:outline-blue" required />
      </div>
  );
}
