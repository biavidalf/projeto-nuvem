import NavBar from '../components/Navbar';
import Navigate from '../components/Navigate';
import Navigation from '../components/Navigation';
import Input from '../components/Input';
 
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

          <div className="w-2/3 p-4">
            <form className="w-full bg-white flex flex-col items-center justify-start rounded py-6 m-auto gap-y-2">
              <h2 className="text-blue bold text-2xl font-semibold">Nova Atividade</h2>  
              
              <div className="w-full flex items-start justify-between flex-wrap">
                <div className="w-1/2">
                  <Input label="Nome"/>
                  <Input label="Prazo"/>
                </div>

                <div className="w-1/2">
                  <Input label="Etapa (AV1/2/3)"/>
                  <Input label="Nota Máxima"/>
                </div>

                <div className="w-full">
                  <Input label="Descricao" type="textarea"/>
                </div>
              </div>
              
              <Navigate text="Criar" path="/aluno" type="1" />
            </form>  
          </div>
        </div>
      </main>
    </div>
  )
}
