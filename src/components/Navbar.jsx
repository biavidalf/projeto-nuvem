import { FaUserCircle } from "react-icons/fa";

export default function Navbar(){
  return (
    <div className="w-full h-24 flex justify-between items-center px-20 text-blue">
      <h2 className="text-2xl font-semibold">Power Grade</h2>
      <div className="text-xl font-semibold flex items-center gap-4">
        {/* Matricula e nome do aluno */}
        <p>2217226 | Beatriz Vidal</p> 

        {/* Adicionar dropdown menu */}
        <FaUserCircle className="text-4xl" />
      </div>
    </div>
  )
}