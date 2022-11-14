import Navigate from "../components/Navigate";

function Input({label}){
  return (
    <div className="w-full px-10">
      <label className="block py-2 text-medium text-blue font-medium">{label}</label>
      <input type="text" className="drop-shadow-md w-full bg-[#FCF9F9] py-2 px-4 outline-none border" />
    </div>
  )
}

export default function Login() {
  return (
    <div className="w-full bg-blue ">
      <div className="flex items-center justify-center gap-6 h-screen max-w-screen-xl mx-auto">
        <header className="w-2/3">
          <h2 className="text-white bold text-5xl font-semibold ">Power Grade</h2>  
          <p className="text-white bold text-3xl pr-8">Tenha um acompanhamento poderoso do seu desempenho acadêmico.</p>
        </header>
  
        <main className="w-1/3 p-4">
          <form className="relative right-16 w-full bg-white flex flex-col items-center justify-start rounded py-6 m-auto">
            <h2 className="text-blue bold text-2xl font-semibold ">Login</h2>  
            <Input label="Matrícula"/>
            <Input label="Senha"/>

            <p className="text-blue mt-2 self-end pr-10">Esqueci minha senha</p>
            
            <Navigate text="Logar" path="/aluno" type="1" />
          </form>  
        </main>
      </div>
    </div>
  )
}
