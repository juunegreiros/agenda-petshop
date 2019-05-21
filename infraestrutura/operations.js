const cruds = require('./crud/index')

class Operations {
  constructor(entidade) {
    this._entidade = entidade
  }

  lista(res) {
    cruds[this._entidade].lista(res)
  }

  buscaPorId(res, id) {
    cruds[this._entidade].buscaPorId(res, id)
  }

  adiciona(res, item) {
    cruds[this._entidade].adiciona(res, item)

  }

  atualiza(res, novoItem, id) {
    cruds[this._entidade].atualiza(res, novoItem, id)
  }

  deleta(res, id) {
    cruds[this._entidade].deleta(res, id)
  }
}

module.exports = Operations
