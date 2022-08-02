// Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.

function pegarTemperatura() {
  return new Promise(function(resolve, reject){
    console.log("pegando temperatura...")

    setTimeout(function(){
      resolve('40 na sombra')
    }, 5000)
  })
}

// USANDO A PROMISE
console.log("código antes")

let temp = pegarTemperatura()

console.log("código durante")

temp.then(function(resultado) {
  console.log(`TEMPERATURA: ${resultado}`)
})

temp.catch(function(error) {
  console.log(error)
})

console.log("código depois")
