const executaQuery = require('../database/queries')

class Atendimento {
  lista() {
    const sql = 'SELECT Atendimentos.id, Atendimentos.data, Atendimentos.status, Atendimentos.observacoes, Pets.id as petId, Pets.nome as petNome, Pets.tipo as petTipo, Pets.observacoes as petObservacoes, Clientes.id as clienteId, Clientes.nome as clienteNome, Clientes.cpf as clienteCpf, Servicos.id as servicoId, Servicos.nome as servicoNome, Servicos.preco as servicoPreco, Servicos.descricao as servicoDescricao FROM Atendimentos INNER JOIN Clientes INNER JOIN Pets INNER JOIN Servicos WHERE Atendimentos.clienteId = Clientes.id AND Atendimentos.petId = Pets.id AND Atendimentos.servicoId = Servicos.id'

    return executaQuery(sql).then(atendimentos => {
      return atendimentos.map(atendimento => ({
        id: atendimento.id,
        data: atendimento.data,
        status: atendimento.status,
        observacoes: atendimento.observacoes,
        cliente: {
          id: atendimento.clienteId,
          nome: atendimento.clienteNome,
          cpf: atendimento.clienteCpf
        },
        pet: {
          id: atendimento.petId,
          nome: atendimento.petNome,
          tipo: atendimento.petTipo,
          observacoes: atendimento.petObservacoes
        },
        servico: {
          id: atendimento.servicoId,
          nome: atendimento.servicoNome,
          preco: atendimento.servicoPreco,
          descricao: atendimento.servicoDescricao
        }
      }))
    })
  }

  buscaPorId(id) {
    const sql = `SELECT Atendimentos.id, Atendimentos.data, Atendimentos.status, Atendimentos.observacoes, Pets.id as petId, Pets.nome as petNome, Pets.tipo as petTipo, Pets.observacoes as petObservacoes, Clientes.id as clienteId, Clientes.nome as clienteNome, Clientes.cpf as clienteCpf, Servicos.id as servicoId, Servicos.nome as servicoNome, Servicos.preco as servicoPreco, Servicos.descricao as servicoDescricao FROM Atendimentos INNER JOIN Clientes INNER JOIN Pets INNER JOIN Servicos WHERE Atendimentos.clienteId = Clientes.id AND Atendimentos.petId = Pets.id AND Atendimentos.servicoId = Servicos.id AND Atendimentos.id = ${id}`

    return executaQuery(sql).then(atendimentos => ({
      id: atendimentos[0].id,
      data: atendimentos[0].data,
      status: atendimentos[0].status,
      observacoes: atendimentos[0].observacoes,
      cliente: {
        id: atendimentos[0].clienteId,
        nome: atendimentos[0].clienteNome,
        cpf: atendimentos[0].clienteCpf
      },
      pet: {
        id: atendimentos[0].petId,
        nome: atendimentos[0].petNome,
        tipo: atendimentos[0].petTipo,
        observacoes: atendimentos[0].petObservacoes
      },
      servico: {
        id: atendimentos[0].servicoId,
        nome: atendimentos[0].servicoNome,
        preco: atendimentos[0].servicoPreco,
        descricao: atendimentos[0].servicoDescricao
      }
    }))
  }

  adiciona(item) {
    const { clienteId, petId, servicoId, status, observacoes } = item
    const data = new Date().toLocaleDateString()

    const sql = `INSERT INTO Atendimentos(clienteId, petId, servicoId, data, status, observacoes) VALUES(${clienteId}, ${petId}, ${servicoId}, '${data}', '${status}', '${observacoes}'); SELECT * FROM Clientes WHERE Clientes.id = ${clienteId}; SELECT * FROM Pets WHERE Pets.id = ${petId}; SELECT * FROM Servicos WHERE Servicos.id = ${servicoId};`

    return executaQuery(sql).then(resposta => {
      const dados = resposta[0]
      const cliente = resposta[1][0]
      const pet = resposta[2][0]
      const servico = resposta[3][0]

      return ({
        id: dados.insertId,
        cliente,
        pet,
        servico,
        data,
        status,
        observacoes
      })
    })
  }

  atualiza(novoItem) {
    const { id, clienteId, petId, servicoId, status, observacoes } = novoItem

    const sql = `UPDATE Atendimentos SET clienteId=${clienteId}, petId=${petId}, servicoId=${servicoId}, status='${status}', observacoes='${observacoes}' WHERE id=${id}; SELECT * FROM Clientes WHERE Clientes.id = ${clienteId}; SELECT * FROM Pets WHERE Pets.id = ${petId}; SELECT * FROM Servicos WHERE Servicos.id = ${servicoId}`
    const data = new Date().toLocaleDateString()

    return executaQuery(sql).then(resposta => {
      const cliente = resposta[1][0]
      const pet = resposta[2][0]
      const servico = resposta[3][0]

      return ({
        id,
        data,
        status,
        observacoes,
        cliente,
        pet,
        servico
      })
    })
  }

  deleta(id) {
    const sql = `DELETE FROM Atendimentos WHERE id=${id}`

    return executaQuery(sql).then(() => id)
  }
}

module.exports = new Atendimento
