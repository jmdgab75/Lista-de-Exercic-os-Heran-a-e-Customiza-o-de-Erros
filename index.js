class ErroCustomizado extends Error{
  constructor(mensagem, nome, endereço, telefone){
    super(mensagem);
    this.stack = "mensagem";
  }

  uhul(){
     return this.message;
  }
}
class Pessoa{
  setnome(nome){
    this.nome = nome;
  }

  getnome(){
    return this.nome ;
  }

  setend(endereço){
    this.endereco = endereço;
  }

  getnome(){
    return this.endereco;
  }

  settelefone(telefone){
    this.telefone = telefone;
  }

  getnome(){
    return this.telefone;
  }
}

class Fornecedor extends Pessoa{
  constructor(credito, divida, empresa){
    super()
    this.valorCredito = credito;
    this.valorDivida = divida;
    this.empresa = empresa;
  }

  obterSaldo(){
   if ( this.valorCredito > 0 && this.valorDivida > 0){
     return this.valorCredito - this.valorDivida;
   } else {
     throw new ErroCustomizado("Valor Negativo: O valor do atributo não pode ser menor que zero") }
   }

  saldoFinal(){
  try{
    return this.nome + "\n" + this.endereco + "\n" + this.telefone + "\n" + this.obterSaldo() + "\n" + this.empresa;
  } catch (erro) {
    return erro.uhul();
  }
}   
  
}

let fornecedor = new Fornecedor( 500, 50, 'DELL');
fornecedor.setnome("Junin");
fornecedor.setend("rua da feira");
fornecedor.settelefone("999872587");
console.log(fornecedor.saldoFinal())