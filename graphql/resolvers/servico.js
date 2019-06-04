const Operacoes = require('../../infraestrutura/operations')

const Servicos = new Operacoes('servico')

const resolvers = {
    Mutation: {
        adicionarServico: (root, params) => Servicos.adiciona(params)
    },
    Query: {
        servicos: () => Servicos.lista()
    }
}

module.exports = resolvers