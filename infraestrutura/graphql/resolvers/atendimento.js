const Operations = require('../../operations')

const Atendimentos = new Operations('atendimento')


const resolvers = {
  Query: {
    atendimentos: () => Atendimentos.lista(),
    atendimento: (root, { ID }) => Atendimentos.buscaPorId(ID)
  },
  Mutation: {
    adicionaAtendimento: (root, args) => Atendimentos.adiciona(args),
    atualizaAtendimento: (root, args) => Atendimentos.atualiza(args),
    deletaAtendimento: (root, { ID }) => Atendimentos.deleta(ID)
  }
}

module.exports = resolvers
