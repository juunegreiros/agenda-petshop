const Operations = require('../infraestrutura/operations')

const Pets = new Operations('pet')


module.exports = app => {
  app.get('/pets', (req, res) => {
    Pets.lista(res)
  })

  app.get('/pets/pet/:id', (req, res) => {
    const { id } = req.params

    Pets.buscaPorId(res, id)
  })

  app.post('/pets/pet', (req, res) => {
    const pet = req.body

    Pets.adiciona(res, pet)
  })

  app.put('/pets/pet/:id', (req, res) => {
    const { id } = req.params
    const pet = req.body

    Pets.atualiza(res, pet, id)
  })

  app.delete('/pets/pet/:id', (req, res) => {
    const { id } = req.params

    Pets.deleta(res, id)
  })
}
