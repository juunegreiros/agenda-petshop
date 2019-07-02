const executaQuery = require('../database/queries')

class Pet {
  lista(res) {
    const sql = 'SELECT * FROM Pets'

    executaQuery(res, sql)
  }

  buscaPorId(res, id) {
    const sql = `SELECT * FROM Pets WHERE id=${parseInt(id)}`

    executaQuery(res, sql)
  }

  adiciona(res, item) {
    const { nome, dono, tipo, observacoes } = item

    const sql = `INSERT INTO Pets(nome, donoId, tipo, observacoes) VALUES('${nome}', ${dono}, '${tipo}', '${observacoes}')`

    executaQuery(res, sql)
  }

  atualiza(res, novoItem, id) {
    const { nome, dono, tipo, observacoes } = novoItem

    const sql = `UPDATE Pets SET nome='${nome}', donoId=${dono}, tipo='${tipo}', observacoes='${observacoes}' WHERE id=${id}`

    executaQuery(res, sql)
  }

  deleta(res, id) {
    const sql = `DELETE FROM Pets WHERE id=${id}`

    executaQuery(res, sql)
  }
}

module.exports = new Pet
