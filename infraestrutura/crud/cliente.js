const executaQuery = require('../database/queries')

class Cliente {
  lista(res) {
    const sql = 'SELECT * FROM Clientes'

    executaQuery(res, sql)
  }

  buscaPorId(res, id) {
    const sql = `SELECT * FROM Clientes WHERE id=${id}`

    executaQuery(res, sql)
  }

  adiciona(res, item) {
    const { nome, cpf } = item
    const sql = `INSERT INTO Clientes(nome, CPF) VALUES('${nome}', '${cpf}')`

    executaQuery(res, sql)
  }

  atualiza(res, novoItem, id) {
    const { nome, cpf } = novoItem
    const sql = `UPDATE Clientes SET nome='${nome}', CPF='${cpf}' WHERE id=${id}`

    executaQuery(res, sql)
  }

  deleta(res, id) {
    const sql = `DELETE FROM Clientes WHERE id=${id}`

    executaQuery(res, sql)
  }
}

module.exports = new Cliente
