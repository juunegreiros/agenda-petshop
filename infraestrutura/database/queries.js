const conexao = require('../conexao')

const executaQuery = (query, res) => {
  return new Promise((resolve, reject) =>
    conexao.query(query, (erro, resultados, a) => {
      console.log('executou a query!')
      if(erro) {
        reject(erro)
      } else {
        resolve(resultados)
      }
    })
  )
}

module.exports = executaQuery
