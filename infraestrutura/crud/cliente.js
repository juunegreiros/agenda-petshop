const executaQuery = require('../database/queries')

class Cliente {
  lista() {
    const sql = 'SELECT * FROM Clientes; SELECT * FROM Pets'

    return executaQuery(sql).then(dados => {
      const clientes = dados[0]
      const pets = dados[1]

      return clientes.map(cliente => {
        const clientePets = pets.filter(pet => pet.donoId === cliente.id)
        return ({ ...cliente, pets: clientePets })
      })
    })
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Clientes WHERE id=${id}`

    return executaQuery(sql).then(dados => dados[0])
  }

  adiciona(item) {
    const { nome, cpf } = item
    const sql = `INSERT INTO Clientes(nome, CPF) VALUES('${nome}', '${cpf}')`

    return executaQuery(sql).then(resposta => ({
      id: resposta.insertId,
      nome,
      cpf
    }))
  }

  atualiza(novoItem) {
    const { id, nome, cpf } = novoItem
    const sql = `UPDATE Clientes SET nome='${nome}', CPF='${cpf}' WHERE id=${id}`

    return executaQuery(sql).then(() => novoItem)
  }

  deleta(id) {
    const sql = `DELETE FROM Clientes WHERE id=${id}`

    return executaQuery(sql).then(() => id)
  }
}

module.exports = new Cliente
