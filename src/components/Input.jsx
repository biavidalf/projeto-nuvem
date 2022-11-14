export default function Input({label, type = "text"}){
  let style = "drop-shadow-md w-full bg-[#FCF9F9] py-2 px-4 outline-none border";

  if(type == "textarea"){
    style += " h-44"
  }
  
  return (
    <div className="w-full px-10">
      <label className="block py-2 text-medium text-blue font-medium">{label}</label>
      <input type="text" className={style} />
    </div>
  )
}