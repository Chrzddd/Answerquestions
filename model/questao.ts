import { embaralhar } from "../functions/arrays"
import AnswerModel from "./resposta"

export default class QuestionModel { 
    #id : number
    #question: string
    #answer: AnswerModel[]
    #correct : boolean
    
    constructor(id: number, question: string, answer:AnswerModel[], correct = false){
        this.#id = id
        this.#question = question
        this.#answer = answer
        this.#correct = correct
    }
    get id(){
        return this.#id
    }
    get question(){
        return this.#question
    }
    get answer(){
        return this.#answer
    }
    get correct(){
        return this.#correct
    }
    get naoRespondida(){
        return !this.respondida
    }
    get respondida(){
        for ( let resposta of this.#answer){
              if(resposta.revelada) return true
        }
        return false
    }
    responderCom(indice: number): QuestionModel{
        const acertou = this.#answer[indice]?.correctQuestion
        const respostas = this.#answer.map((answer, i)=>{
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || answer.correctQuestion
            return deveRevelar ? answer.revelar() : answer
        })
        return new QuestionModel(this.id, this.question, respostas, acertou)
    }
    embaralharRespostas(): QuestionModel{
        let respostasEmbaralhadas = embaralhar(this.#answer)
        return new QuestionModel(this.#id, this.#question, respostasEmbaralhadas, this.#correct)
    }
    static criarUsandoObjeto(obj: QuestionModel): QuestionModel{
        const respostas = obj.answer.map(resp => AnswerModel.criarUsandoObjeto(resp))
        return new QuestionModel(obj.id, obj.question, respostas, obj.correct)
    }     
    paraObject(){
        return {
            id:this.#id,
            question:this.#question,
            answer:this.#answer.map(resp => resp.paraObjeto()),
            respondida: this.respondida,
            correct:this.#correct,
    
        }
}
}