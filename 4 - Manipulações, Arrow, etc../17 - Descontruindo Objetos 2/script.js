let pessoa = {
  nome: 'Marlon',
  sobrenome: 'Braga',
  idade: 98,
  social: {
    facebook: 'Marlon Braga',
    instagram: {
      url: '@marlon',
      seguidores: 1000
    }
  },
  nomeCompleto: function(){
    return `${this.nome} ${this.sobrenome}`
  }
}

// let { facebook } = pessoa.social
// let { nome, idade, social:{instagram}} = pessoa

// console.log(nome, idade, instagram.url, facebook)

function pegarNomeCompleto({nome, sobrenome, social:{instagram:{url: instagram}}}) {
  return `${nome} ${sobrenome} (Siga em ${instagram})`
}

console.log(pegarNomeCompleto(pessoa))

// EXERCICIO

let time = {
  nome: 'Real Madrid',
  jogador:{
  goleiro: 'Courtuis',
  lateral: 'Marcelo'
  }
};

// let {goleiro, lateral} = time.jogador;