let pessoa = {
  nome: 'Marlon',
  sobrenome: 'Braga',
  idade: 980,
  social: {
    facebook: 'Marlon Braga',
    instagram: 'marlon_bragaf'
  },
  nomeCompleto: function(){
    return `${this.nome} ${this.sobrenome}`
  }
}

let { 
  nome: nomeDoUsuario, 
  sobrenome, 
  idade = 0 
} = pessoa

let texto = `Meu nome é ${nomeDoUsuario} ${sobrenome}, é tenho ${idade} anos`

console.log(texto)

// EXERCICIO

// Qual será o resultado da desconstrução de objetos abaixo, exibida no console?

var a = [100, 200, 300, 400, 500];
var [b, c] = a;
console.log(b);