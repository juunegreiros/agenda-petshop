const Operations = require('../infraestrutura/operations')

const Clientes = new Operations('cliente')

module.exports = app => {
  app.get('/clientes', () => {
    return Clientes.lista()
  })

  app.get('/clientes/cliente/:id', (id) => {
     Clientes.buscaPorId(id)
  })

  app.post('/clientes/cliente', (req, res) => {
    const cliente = req.body

    Clientes.adiciona(res, cliente)
  })

  app.put('/clientes/cliente/:id', (req, res) => {
    const { id } = req.params
    const cliente = req.body

    Clientes.atualiza(res, cliente, id)
  })

  app.delete('/clientes/cliente/:id', (req, res) => {
    const { id } = req.params

    Clientes.deleta(res, id)
  })
}
