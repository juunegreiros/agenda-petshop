const executaQuery = require('../database/queries')

class Cliente {
  lista() {
    const sql = 'SELECT * FROM Clientes'
    return executaQuery(sql)
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Clientes WHERE ID=${id}`

    return executaQuery(sql).then(data => data[0])
  }

  adiciona(item) {
    const { Nome, CPF } = item
    const sql = `INSERT INTO Clientes(Nome, CPF) VALUES('${Nome}', '${CPF}')`

    return executaQuery(sql).then(cliente =>
      ({ID: cliente.insertId, Nome, CPF})
    )
  }

  atualiza(novoItem) {
    const { ID, Nome, CPF } = novoItem
    const sql = `UPDATE Clientes SET Nome='${Nome}', CPF='${CPF}' WHERE ID=${ID}`

    return executaQuery(sql).then(() => novoItem)
  }

  deleta(id) {
    const sql = `DELETE FROM Clientes WHERE ID=${id}`

    return executaQuery(sql).then(() => id)
  }
}

module.exports = new Cliente()
