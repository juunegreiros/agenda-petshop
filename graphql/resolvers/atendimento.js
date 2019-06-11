const Operacoes = require('../../infraestrutura/operations')

const Atendimentos = new Operacoes('atendimento')

const resolvers = {
    Mutation: {
        adicionarAtendimento: (root, params) => Atendimentos.adiciona(params)
    }
}

module.exports = resolvers