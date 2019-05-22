const executaQuery = require('../database/queries')

class Servico {
  lista() {
    const sql = 'SELECT * FROM Servicos'

    return executaQuery(sql)
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Servicos WHERE ID=${parseInt(id)}`

    return executaQuery(sql).then(data => data[0])
  }

  adiciona(item) {
    const { Nome , Preco, Descricao } = item
    const sql = `INSERT INTO Servicos(Nome, Preco, Descricao) VALUES('${Nome}', ${Preco}, '${Descricao}')`

    return executaQuery(sql).then(servico =>
      ({ ID: servico.insertId, Nome, Preco, Descricao })
    )
  }

  atualiza(novoItem) {
    const { ID, Nome, Preco, Descricao } = novoItem
    const sql = `UPDATE Servicos SET Nome='${Nome}', Preco=${Preco}, Descricao='${Descricao}' WHERE ID=${ID}`

    return executaQuery(sql).then(() => novoItem)
  }

  deleta(id) {
    const sql = `DELETE FROM Servicos WHERE ID=${id}`

    return executaQuery(sql).then(() => id)
  }
}

module.exports = new Servico()
