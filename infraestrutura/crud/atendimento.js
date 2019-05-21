const executaQuery = require('../database/queries')

class Atendimento {
  lista(res) {
    const sql = 'SELECT * FROM Atendimentos'

    executaQuery(res, sql)
  }

  buscaPorId(res, id) {
    const sql = `SELECT * FROM Atendimentos WHERE ID=${parseInt(id)}`

    executaQuery(res, sql)
  }

  adiciona(res, item) {
    const { cliente, pet, servico, status, observacoes } = item
    const data = new Date().toLocaleDateString()

    const sql = `INSERT INTO Atendimentos(ClienteID, PetID, ServicoID, Data, Status, Observacoes) VALUES(${cliente}, ${pet}, ${servico}, ${data}, '${status}', '${observacoes}')`

    executaQuery(res, sql)
  }

  atualiza(res, novoItem, id) {
    const { nome, dono, tipo, observacoes } = item

    const sql = `UPDATE Atendimentos SET Nome='${nome}', DonoID=${dono}, Tipo='${tipo}', Observacoes='${obervacoes}' WHERE ID=${id}`

    executaQuery(res, sql)
  }

  deleta(res, id) {
    const sql = `DELETE FROM Atendimentos WHERE ID=${id}`

    executaQuery(res, sql)
  }
}

module.exports = new Atendimento
