// Objetos

let carro = {
  nome: 'Fiat',
  modelo: 'Uno',
  peso: '800kg',
  ligado: false,
  ligar: function() {
    this.ligado = true
    console.log("VRUM VRUM VRUM!")
  },
  acelerar: function() {
    if(this.ligado === true) {
      console.log("BI BI BIIIIIIIII")
    } else {
      console.log(this.nome + " " + this.modelo + " não está ligado" )
    }
  }
}

console.log("Modelo: "+carro.modelo)

carro.ligar()
carro.acelerar()

// Objetos dentro de um array

let carros = [
  {nome: 'Fiat', modelo: 'Palio'},
  {nome: 'Fiat', modelo: 'Uno'},
  {nome: 'Toyota', modelo: 'Corolla'},
  {nome: 'Ferrari', modelo: 'Spider'},
]

console.log(carros[2].nome)

// O conteúdo existente dentro de um objeto está dentro de: chaves.