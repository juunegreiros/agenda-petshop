const Operations = require('../../operations')

const Servicos = new Operations('servico')


const resolvers = {
  Query: {
    servicos: () => Servicos.lista(),
    servico: (root, { ID }) => Servicos.buscaPorId(ID)
  },
  Mutation: {
    adicionaServico: (root, args) => Servicos.adiciona(args),
    atualizaServico: (root, args) => Servicos.atualiza(args),
    deletaServico: (root, { ID }) => Servicos.deleta(ID)
  }
}

module.exports = resolvers
