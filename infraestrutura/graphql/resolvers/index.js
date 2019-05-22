const path = require('path')
const mergeGraphQlSchemas = require('merge-graphql-schemas')

const {
  fileLoader,
} = mergeGraphQlSchemas;

const resolvers = fileLoader(path.join(__dirname, './'))

module.exports = resolvers
