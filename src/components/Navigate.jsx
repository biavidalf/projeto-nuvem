import { useNavigate } from "react-router-dom";
import Button from './Button';
 
export default function Navigate({ text, path, type, weight, classDefinition }) {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate(path);
  }
  if(type == '1'){
    return (
      <button onClick={routeChange} className="my-4 py-2 px-12 bg-yellow rounded text-white font-medium text-xl">{text}</button>
    )
  }else if(type == '2'){
    return (<Button click={routeChange} text={text} weight={weight ? weight : ''} />)
  }else if(type == '3'){
    return (<button className={classDefinition} onClick={routeChange}>{text}</button>)
  }
 
}
