const executaQuery = require('../database/queries')

class Pet {
  lista(res) {
    const sql = 'SELECT * FROM Pets'

    executaQuery(res, sql)
  }

  buscaPorId(res, id) {
    const sql = `SELECT * FROM Pets WHERE ID=${parseInt(id)}`

    executaQuery(res, sql)
  }

  adiciona(res, item) {
    const { nome, dono, tipo, observacoes } = item

    const sql = `INSERT INTO Pets(Nome, DonoID, Tipo, Observacoes) VALUES('${nome}', ${dono}, '${tipo}', '${observacoes}')`

    executaQuery(res, sql)
  }

  atualiza(res, novoItem, id) {
    const { nome, dono, tipo, observacoes } = item

    const sql = `UPDATE Pets SET Nome='${nome}', DonoID=${dono}, Tipo='${tipo}', Observacoes='${obervacoes}' WHERE ID=${id}`

    executaQuery(res, sql)
  }

  deleta(res, id) {
    const sql = `DELETE FROM Pets WHERE ID=${id}`

    executaQuery(res, sql)
  }
}

module.exports = new Pet
