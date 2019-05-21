const conexao = require('../conexao')

const executaQuery = (res, query) => {
  conexao.query(query, (erro, resultados, campos) => {
    if (erro) {
      res.json(erro)
    } else {
      res.json(resultados)
    }

   console.log('executou a query!')
  })
}

module.exports = executaQuery
