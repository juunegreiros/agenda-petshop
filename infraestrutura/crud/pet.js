const executaQuery = require('../database/queries')

class Pet {
  lista() {
    const sql = 'SELECT * FROM Pets'

    return executaQuery(sql)
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Pets WHERE ID=${parseInt(id)}`

    return executaQuery(sql).then(data => data[0])
  }

  adiciona(item) {
    const { Nome, DonoID, Tipo, Observacoes } = item

    const sql = `INSERT INTO Pets(Nome, DonoID, Tipo, Observacoes) VALUES('${Nome}', ${DonoID}, '${Tipo}', '${Observacoes}')`

    return executaQuery(sql).then(pet => ({
      ID: pet.insertId,
      Nome,
      DonoID,
      Tipo,
      Observacoes
    }))
  }

  atualiza(novoItem) {
    const { ID, Nome, DonoID, Tipo, Observacoes } = novoItem

    const sql = `UPDATE Pets SET Nome='${Nome}', DonoID=${DonoID}, Tipo='${Tipo}', Observacoes='${Observacoes}' WHERE ID=${ID}`

    return executaQuery(sql).then(() => novoItem)
  }

  deleta(id) {
    const sql = `DELETE FROM Pets WHERE ID=${id}`

    executaQuery(sql).then(() => id)
  }
}

module.exports = new Pet()
