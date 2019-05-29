const cruds = require('./crud/index')

class Operations {
  constructor(entidade) {
    this._entidade = entidade
  }

  lista() {
    return cruds[this._entidade].lista()
  }

  buscaPorId(id) {
    return cruds[this._entidade].buscaPorId(id)
  }

  adiciona(item) {
    return cruds[this._entidade].adiciona(item)
  }

  atualiza(novoItem, id) {
    return cruds[this._entidade].atualiza(novoItem, id)
  }

  deleta(id) {
    return cruds[this._entidade].deleta(id)
  }
}

module.exports = Operations
