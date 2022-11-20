import Navigate from './Navigate';

export default function Prova({text, discipline, date, buttonTitle}){
  return (
    <div className="bg-white w-80 px-8 py-6 text-blue flex flex-col gap-3 items-start rounded drop-shadow-md ">
      <div className="w-full flex justify-between items-center">
        <div className="font-bold text-xl">{text}</div>
        <Navigate text={buttonTitle} path="/login" type="2" />
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="text-md font-medium">{discipline}</div>
        {date &&
          (<div className="text-md font-medium">Até: {date}</div>)
        }
      </div>      
    </div>
  )
}