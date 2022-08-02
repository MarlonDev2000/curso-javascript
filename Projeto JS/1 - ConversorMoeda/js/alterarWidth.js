let moedaEstrangeira = document.querySelector('#estrangeira')
let moedaNacional = document.querySelector('#nacional')


document.onclick = (function(evento){
  if (evento.target === moedaNacional || evento.target === moedaEstrangeira){
  	moedaEstrangeira.style.width = '350px'
    moedaNacional.style.width = '350px'
  }
})
