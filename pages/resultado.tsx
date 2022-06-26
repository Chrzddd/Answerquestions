import { useRouter } from 'next/router'
import Estatisticas from '../components/Estatisticas'
import Botao from '../components/Botao'
import styles from '../styles/Resultado.module.css'

export default function Resultado(){
    const router = useRouter()

    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas/total)*100)

    return (
        <div className={styles.resultado}>
                <h1>Resultado Final</h1>
                <div style={{display:"flex"}}>
                    <Estatisticas texto="Perguntas" valor={total}/>
                    <Estatisticas texto="certas" valor={certas}
                     corFundo="#9CD2A4"/>
                    <Estatisticas texto="Percetual" valor={`${percentual}%`}
                      corFundo="#de6a33"/>             
                </div>
                <Botao href="/" texto="Tentar Novamente"/>
        </div>
    )
}