const Operations = require('../../operations')

const Pets = new Operations('pet')


const resolvers = {
  Query: {
    pets: () => Pets.lista(),
    pet: (root, { ID }) => Pets.buscaPorId(ID)
  },
  Mutation: {
    adicionaPet: (root, args) => Pets.adiciona(args),
    atualizaPet: (root, args) => Pets.atualiza(args),
    deletaPet: (root, { ID }) => Pets.deleta(ID)
  }
}

module.exports = resolvers
