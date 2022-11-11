export default function Title({text, color}){
  return (
    <h2 className={`text-xl font-medium text-${color} my-4`}>{text}</h2>
  )
}