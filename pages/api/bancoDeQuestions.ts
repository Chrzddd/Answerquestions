import QuestionModel from "../../model/questao";
import AnswerModel from "../../model/resposta";

const questoes: QuestionModel[] = [
    new QuestionModel(306, 'Qual bicho transmite a Doença de chagas', [
        AnswerModel.errada('Abelha'),
        AnswerModel.errada('Barata'),
        AnswerModel.errada('Pulga'),
        AnswerModel.questaoCerta('Barbeiro'),
    ]),
    new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "Jerimum"', [
        AnswerModel.errada('Caju'),
        AnswerModel.errada('Coco'),
        AnswerModel.errada('Chuchu'),
        AnswerModel.questaoCerta('Abóbora'),
    ]),
    new QuestionModel(203, 'Qual capital da italia?"', [
        AnswerModel.errada('Londres'),
        AnswerModel.errada('Inglaterra'),
        AnswerModel.errada('Veneza'),
        AnswerModel.questaoCerta('Roma'),
    ]),
    new QuestionModel(204, 'Qual a capital do Maranhão', [
        AnswerModel.errada('Sergipe'),
        AnswerModel.errada('Belém'),
        AnswerModel.errada('Salvador'),
        AnswerModel.questaoCerta('São Luís'),
    ]),
    new QuestionModel(205, 'Quantos anos possui a capital do Pará', [
        AnswerModel.errada('392 anos'),
        AnswerModel.errada('300 anos'),
        AnswerModel.errada('323 anos'),
        AnswerModel.questaoCerta('406 anos'),
    ])
]

export default questoes