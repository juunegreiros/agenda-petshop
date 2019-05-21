const Operations = require('../infraestrutura/operations')

const Servicos = new Operations('servico')

module.exports = app => {
  app.get('/servicos', (req, res) => {
    Servicos.lista(res)
  })

  app.get('/servicos/servico/:id', (req, res) => {
    const { id } = req.params

    Servicos.buscaPorId(res, id)
  })

  app.post('/servicos/servico', (req, res) => {
    const servico = req.body

    Servicos.adiciona(res, servico)
  })

  app.put('/servicos/servico/:id', (req, res) => {
    const { id } = req.params
    const servico = req.body

    Servicos.atualiza(res, servico, id)
  })

  app.delete('/servicos/servico/:id', (req, res) => {
    const { id } = req.params

    Servicos.deleta(res, id)
  })
}
