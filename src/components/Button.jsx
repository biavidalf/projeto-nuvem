export default function Button({text, click, weight}){
  return (
    <button onClick={click} className={`bg-blue px-8 py-1 text-white font-medium text-medium rounded mt-2 drop-shadow-xl ${weight}`}>{text}</button>
  )
}