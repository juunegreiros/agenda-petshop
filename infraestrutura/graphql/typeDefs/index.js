const path = require('path')
const mergeGraphQlSchemas = require('merge-graphql-schemas')

const {
  fileLoader,
  mergeTypes
} = mergeGraphQlSchemas;

const typesArray = fileLoader(path.join(__dirname, "./"));
const typesMerged = mergeTypes(typesArray);

module.exports = typesMerged;
