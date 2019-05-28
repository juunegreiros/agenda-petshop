const { GraphQLServer } = require('graphql-yoga')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')
const Operacoes = require('./infraestrutura/operacoes')

conexao.connect(erro => {
  if (erro) {
    console.log(erro)
  }

  console.log('conectou no banco')

  Tabelas.init(conexao)
})

const Clientes = new Operacoes('cliente')
const Pets = new Operacoes('pet')

const resolvers = {
  Query: {
    status: () => 'rodando com sucesso',
    clientes: () => Clientes.lista(),
    cliente: (root, { id }) => Clientes.buscaPorId(id),
    pets: () => Pets.lista()
  },
  Mutation: {
    adicionaCliente: (root, params) => Clientes.adiciona(params),
    atualizaCliente: (root, params) => Clientes.atualiza(params),
    deletaCliente: (root, { id }) => Clientes.deleta(id),
    adicionaPet: (root, params) => Pets.adiciona(params)
  }
}

const servidor = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers
})

servidor.start(() => console.log('rodando na porta 4000'))