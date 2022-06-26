import styles from '../styles/Answer.module.css'
import AnswerModel from "../model/resposta"

interface RespostaProps{
    valor: AnswerModel
    indice: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (indice:number)=> void
}
export default function Resposta(props: RespostaProps){
    const resposta = props.valor
    const RespostaRevelada = resposta.revelada ? styles.RespostaRevelada : '' 
    return (
        <div className={styles.resposta} onClick={()=> props.respostaFornecida(props.indice)}>
            <div className={`${RespostaRevelada} ${styles.conteudoResposta}`}>
                {resposta.revelada ? (
                 <div className={styles.verso}>
                     {resposta.correctQuestion?(
                        <div className={styles.certa}>
                              <div>A resposta certa é...</div>
                              <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                     ):(
                        <div className={styles.errada}>
                              <div>A resposta informada está errada...</div>
                              <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                     )}
                 </div>                  
                ):(
                    <div className={styles.frente}>
                        <div className={styles.letra} style={{backgroundColor: props.corFundoLetra}}>
                        {props.letra}
                        </div>
                        <div className={styles.valor}>
                        {resposta.valor}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}