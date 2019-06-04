const executaQuery = require('../database/queries')

class Pet {
  lista() {
    const sql = 'SELECT * FROM Pets'

    return executaQuery(sql)
  }

  buscaPorId(res, id) {
    const sql = `SELECT * FROM Pets WHERE id=${parseInt(id)}`

    executaQuery(res, sql)
  }

  adiciona(item) {
    const { nome, donoId, tipo, observacoes } = item

    const sql = `INSERT INTO Pets(nome, donoId, tipo, observacoes) VALUES('${nome}', ${donoId}, '${tipo}', '${observacoes}')`

    return executaQuery(sql).then(resposta => ({
      id: resposta.insertId,
      nome,
      donoId,
      tipo,
      observacoes
    }))
  }

  atualiza(res, novoItem, id) {
    const { nome, dono, tipo, observacoes } = item

    const sql = `UPDATE Pets SET nome='${nome}', donoId=${dono}, tipo='${tipo}', observacoes='${obervacoes}' WHERE id=${id}`

    executaQuery(res, sql)
  }

  deleta(res, id) {
    const sql = `DELETE FROM Pets WHERE id=${id}`

    executaQuery(res, sql)
  }
}

module.exports = new Pet
