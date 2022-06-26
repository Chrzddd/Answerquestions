
import questoes from '../bancoDeQuestions'
export default function questoesPorId(req, res) {

    const idSelecionado = +req.query.id

    const unicaQuestao = questoes.filter(questao => questao.id === idSelecionado)
    
    if (unicaQuestao.length === 1){
      const questaoSelecionada = unicaQuestao[0].embaralharRespostas() 
      res.status(200).json(questaoSelecionada.paraObject())
    
    }else{
      res.status(204).send()
    }
    
  }
  