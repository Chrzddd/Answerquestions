
export default class AnswerModel { 
    #valor: string
    #correctQuestion: boolean
    #revelada: boolean
    
    constructor(valor: string, correctQuestion: boolean, revelada= false) {
        this.#valor = valor,
        this.#correctQuestion = correctQuestion,
        this.#revelada = revelada
    }

    static questaoCerta(valor: string){
        return new AnswerModel(valor, true)
    }
    static errada(valor: string){
        return new AnswerModel(valor, false)
    }

    get valor(){
        return this.#valor
    }
    get correctQuestion(){
        return this.#correctQuestion
    }
    get revelada(){
        return this.#revelada
    }
    revelar(){
        return new AnswerModel(this.#valor, this.#correctQuestion, true)
    }
    static criarUsandoObjeto(obj: AnswerModel): AnswerModel{
        return new AnswerModel(obj.valor, obj.correctQuestion, obj.revelada)
    }
    paraObjeto(){
        return {
            valor: this.#valor,
            correctQuestion: this.#correctQuestion,
            revelada: this.#revelada
        }
    }
}