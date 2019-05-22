const executaQuery = require('../database/queries')

class Atendimento {
  lista() {
    const sql = 'SELECT * FROM Atendimentos'

    return executaQuery(sql)
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Atendimentos WHERE ID=${parseInt(id)}`

    return executaQuery(sql).then(data => data[0])
  }

  adiciona(item, date) {
    const { ClienteID, PetID, ServicoID, Status, Observacoes } = item
    const Data = new Date().toLocaleDateString()

    const sql = `INSERT INTO Atendimentos(ClienteID, PetID, ServicoID, Data, Status, Observacoes) VALUES(${ClienteID}, ${PetID}, ${ServicoID}, ${Data}, '${Status}', '${Observacoes}')`

    return executaQuery(sql).then(atendimento => ({
      ID: atendimento.insertId,
      ClienteID,
      PetID,
      ServicoID,
      Data,
      Status,
      Observacoes
    }))
  }

  atualiza(novoItem) {
    const { ID, ClienteID, PetID, ServicoID, Status, Observacoes } = novoItem

    const sql = `UPDATE Atendimentos SET ClienteID='${ClienteID}', PetID=${PetID}, ServicoID=${ServicoID}, Data=${Data}, Status='${Status}', Observacoes='${Observacoes}' WHERE ID=${ID}`

    return executaQuery(sql).then(() => novoItem)
  }

  deleta(id) {
    const sql = `DELETE FROM Atendimentos WHERE ID=${id}`

    return executaQuery(sql).then(() => id)
  }
}

module.exports = new Atendimento()
