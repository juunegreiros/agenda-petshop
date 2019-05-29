const executaQuery = require('../database/queries')

class Cliente {
  lista() {
    const sql = 'SELECT * FROM Clientes'

    return executaQuery(sql)
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Clientes WHERE id=${id}`

    return executaQuery(sql).then(clientes => clientes[0])
  }

  adiciona(item) {
    const { nome, cpf } = item
    const sql = `INSERT INTO Clientes(nome, CPF) VALUES('${nome}', '${cpf}')`

    return executaQuery(sql).then(resposta =>
      ({
        id: resposta.insertId,
        nome,
        cpf
      })
    )
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
