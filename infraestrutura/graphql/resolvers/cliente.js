const Operations = require('../../operations')

const Clientes = new Operations('cliente')


const resolvers = {
  Query: {
    clientes: () => Clientes.lista(),
    cliente: (root, { ID }) => Clientes.buscaPorId(ID)
  },
  Mutation: {
    adicionaCliente: (root, args) => Clientes.adiciona(args),
    atualizaCliente: (root, args) => Clientes.atualiza(args),
    deletaCliente: (root, { ID }) => Clientes.deleta(ID)
  }
}

module.exports = resolvers
