import Button from './Button';

export default function Prova({text, discipline, date, buttonTitle}){
  const handleClick = () => {
  
  }
  
  return (
    <div className="bg-white w-80 px-8 py-6 text-blue flex flex-col gap-3 items-start rounded drop-shadow-md ">
      <div className="w-full flex justify-between items-center">
        <div className="font-bold text-xl">{text}</div>
        <Button text={buttonTitle} click={handleClick} weight="" />
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


/* 
clicar no botao fazer
instancia[userLogado.matricula].isEntregue = true
*/

/* 
PROFESSOR
clica na atvd
provas entregues
turma.atividades if(isEntregue) {return} |botao avaliar| -> instancia.nota = 10
*/