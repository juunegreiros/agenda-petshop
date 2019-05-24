const conexao = require('../conexao')

const executaQuery = (query) => {
  return new Promise((resolve, rejeita) => 
    conexao.query(query, (erro, resultados) => {
      console.log('executou a query!')
      
      if (erro) {
        rejeita(erro)
      } else {
        resolve(resultados)
      }
    })
  )
}

module.exports = executaQuery
