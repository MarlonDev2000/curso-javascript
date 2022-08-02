let carro = {
  nome: 'Fiat',
  modelo: 'Uno',
  peso: '800kg',
  ligar: function() {
    console.log("VRUM VRUM VRUM!")
  },
  buzinar: function() {
    console.log("BI BI BIIIIIIIII")
  }
}

console.log("Marca: " + carro. nome, "Modelo: "+carro.modelo, "Peso: "+carro.peso)
carro.ligar()
carro.buzinar()

// De acordo com o Objeto criado a seguir:
// Qual das alternativas está mostrando corretamente o nome da marca no console via javascript?
let tv = {nome: 'Qled', polegadas: '60', marca: 'Samsung'};
console.log(tv.marca);