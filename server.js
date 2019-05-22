const { GraphQLServer } = require('graphql-yoga')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')
const resolvers = require('./infraestrutura/graphql/resolvers')
const typeDefs = require('./infraestrutura/graphql/typeDefs')

conexao.connect(erro => {
  if (erro) {
    console.log(erro)
  }

  console.log('conectou no banco')

  Tabelas.init(conexao)
})

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log('Servidor rodando na porta 4000'))
