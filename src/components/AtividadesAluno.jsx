import { useEffect } from "react";
import Prova from "./Prova";
import { disciplinas } from '../../server/staticData/disciplinas';

export default function AtividadesAluno({turmas}){
    return(
        turmas &&
        turmas.map((turma) => {
            return(
                turma.atividades.map((atividade) => {
                    let prazo = new Date(atividade.prazo);
                    prazo = `${prazo.getDate()}/${(prazo.getMonth()+1).toString().padStart(2, '0')}`
                    return(
                        <Prova text={atividade.titulo} discipline={turma.disciplina.nome} date={prazo} buttonTitle='Fazer'/>
                    )
                })
            )
            
        })
    )
}