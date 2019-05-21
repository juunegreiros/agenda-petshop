class Tabelas {
  init(conexao) {
    this.conexao = conexao
    this.criaClientes()
    this.criaPets()
    this.criaServicos()
    this.criaAtendimentos()

    console.log('tabelas criadas!')
  }

  criaClientes() {
    const sql = 'CREATE TABLE IF NOT EXISTS Clientes (ID int NOT NULL AUTO_INCREMENT, Nome varchar(150) NOT NULL, CPF char(11) NOT NULL, PRIMARY KEY (ID));'

    this.criaTabela(sql)
  }

  criaPets() {
    const sql = 'CREATE TABLE IF NOT EXISTS Pets (ID int NOT NULL AUTO_INCREMENT, Nome varchar(150), DonoID int, Tipo varchar(100), Observacoes text, PRIMARY KEY (ID), FOREIGN KEY (DonoID) references Clientes(ID))'

    this.criaTabela(sql)
  }

  criaServicos() {
    const sql = 'CREATE TABLE IF NOT EXISTS Servicos (ID int NOT NULL AUTO_INCREMENT, Nome varchar(150), Preco decimal(5,2), Descricao text, PRIMARY KEY (ID))'

    this.criaTabela(sql)
  }

  criaAtendimentos() {
    const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (ID int NOT NULL AUTO_INCREMENT, ClienteID int, PetID int, ServicoID int, Data datetime, Status varchar(100), Observacoes text, PRIMARY KEY(ID), FOREIGN KEY (ClienteId) references Clientes(ID), FOREIGN KEY (PetID) references Pets(ID), FOREIGN KEY (ServicoId) references Servicos(ID))'

    this.criaTabela(sql)
  }

  criaTabela(sql) {
    this.conexao.query(sql, erro => {
      if(erro) {
        console.log(erro)
      }
    })
  }
}



module.exports = new Tabelas
