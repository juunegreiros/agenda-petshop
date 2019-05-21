const database = require('../database')

class Operations {
  constructor(entidade) {
    this._entidade = entidade
  }

  lista(res) {
    res.send(database[this._entidade])
  }

  buscaPorId(res, id) {
    const item = database[this._entidade].filter(item => item.id === id)
    res.send(item)
  }

  adiciona(res, item) {
    database[this._entidade].push(item)
    res.send(item)
  }

  atualiza(res, novoItem, id) {
    const novosItens = database[this._entidade].map(item => {
      let itemAlterado = item
      if(item.id === id) {
        itemAlterado = {...novoItem}
      }

      return itemAlterado
    })
    database[this._entidade] = novosItens

    res.send(novoItem)
  }

  deleta(res, id) {
    const novosItens = database[this._entidade].filter(item => !(item.id === id))
    database[this._entidade] = [...novosItens]
    res.send(database)
  }
}

module.exports = Operations