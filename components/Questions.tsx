import QuestionModel from "../model/questao";
import styles from '../styles/Questions.module.css'
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import Temporizador from "./Temporizador";

const letras = [
    {valor: 'A', cor: '#F2C866'},
    {valor: 'B', cor: '#F266BA'},
    {valor: 'C', cor: '#84D4F2'},
    {valor: 'D', cor: '#BCE596'},
]
interface QuestaoProps{
    valor: QuestionModel
    tempoResposta?: number
    respostaFornecida: (indice: number) =>void
    tempoEsgotado:()=> void
}
export default function Question(props: QuestaoProps){
     const questao = props.valor
     function renderizarRespostas(){
         return questao.answer.map((resposta, i)=>{
             return <Resposta 
                key = {`${questao.id}${i}`}
                valor={resposta}
                indice={i}
                letra={letras[i].valor}
                corFundoLetra={letras[i].cor}
                respostaFornecida = {props.respostaFornecida}
             />
         })
     }
     return (
         <div className={styles.questao}>
               <Enunciado texto={questao.question}/>
               <Temporizador key={questao.id} duracao={props.tempoResposta?? 10} 
               tempoEsgotado={props.tempoEsgotado}/>
               {renderizarRespostas()}
         </div>
     )
}