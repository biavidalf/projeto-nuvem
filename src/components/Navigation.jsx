import Navigate from "./Navigate";

export default function Navigation(){
    return (
        <div className="flex items-center justify-start gap-4 text-white">
            <Navigate text="Home" path="/professor" type="3" />
            <div>|</div>
            <Navigate text="Interação Humano Computador" path="/turma" type="3" />
        </div>
    )
}