const customExpress = require('./config/custom-express')

const app = customExpress()

app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000')
})