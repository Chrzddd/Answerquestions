import QuestionModel from "../model/questao"
import styles from '../styles/Questionario.module.css'
import Botao from "./Botao"
import Question from "./Questions"
interface QuestionarioProps{
    questao: QuestionModel
    ultima: boolean
    questaoRespondida: (questao: QuestionModel) => void
    irProximoPasso: () => void
}
export default function Questionario(props: QuestionarioProps){
    function respostaFornecida(indice:number){
        if (props.questao.naoRespondida){
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }
    return (
        <div className={styles.questionario}>
           {props.questao?
                <Question
                valor={props.questao}
                tempoResposta={6}
                respostaFornecida={respostaFornecida} 
                tempoEsgotado={props.irProximoPasso}/>
            : false
           }

           <Botao onClick={props.irProximoPasso} 
           texto={props.ultima? 'Finalizar' : 'Próxima'}/>
        </div>
        
    )
}