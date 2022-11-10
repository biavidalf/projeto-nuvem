import { FaUserCircle } from "react-icons/fa";

export default function Navbar(){
  return (
    <div className="w-full h-20 flex justify-between items-center px-20 text-blue">
      <h2 className="text-xl font-semibold">Power Grade</h2>
      <div className="text-medium font-semibold flex items-center gap-4">
        <p>2217226 | Beatriz Vidal</p> 
        <FaUserCircle className="text-3xl" />
      </div>
    </div>
  )
}