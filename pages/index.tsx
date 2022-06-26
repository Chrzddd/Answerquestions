
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'
import { useEffect, useRef, useState } from 'react'
import Botao from '../components/Botao'
import Questionario from '../components/Questionario'
import Questions from '../components/Questions'
import QuestionModel from '../model/questao'
import {useRouter} from 'next/router'

const BASE_URL = 'http://localhost:3000/api'
export default function Home() {
  const router = useRouter()
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestionModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)  
    
    async function carregarQuestoesIds(){
      const resp = await fetch(`${BASE_URL}/questionario`)
      const idsDasQuestoes = await resp.json()
      setIdsDasQuestoes(idsDasQuestoes)
    }
    async function carregarQuestao(idQuestao: number){
      const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
      const json = await resp.json()
      const novaQuestao = QuestionModel.criarUsandoObjeto(json)
      setQuestao(novaQuestao)
      
    }

    useEffect (()=>{
      carregarQuestoesIds()
    },[])
    useEffect (()=>{
      idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
    },[idsDasQuestoes])

    function questaoRespondida(questaoRespondida: QuestionModel){
        setQuestao(questaoRespondida)
        const acertou = questaoRespondida.correct
        setRespostasCertas(respostasCertas+(acertou ? 1 : 0))
    }

    function idProximaPergunta(){

        const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
        return idsDasQuestoes [proximoIndice]

    }

    function irProximoPasso(){
     const proximoId = idProximaPergunta()
     proximoId ? irPraProximaQuestao(proximoId) : finalizar()
    }

    function irPraProximaQuestao(proximoId:number){
        carregarQuestao(proximoId)
    }
    function finalizar(){
        router.push({
          pathname:"/resultado",
          query:{
            total:idsDasQuestoes.length,
            certas:respostasCertas
          }
        })
    }
  return questao ? 
      (<Questionario 
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irProximoPasso={irProximoPasso}/>) 
      : false
}
