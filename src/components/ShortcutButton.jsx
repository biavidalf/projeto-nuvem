export default function ShortcutButton({ text, width }) {
    if(width){
        return (
            <button className={`my-4 py-4 w-${width} bg-white rounded text-blue font-medium text-xl drop-shadow-xl`}>{text}</button>
          )
    }else{
        return (
          <button className="my-4 py-4 w-44 bg-white rounded text-blue font-medium text-xl drop-shadow-xl">{text}</button>
        )
    }
  }
