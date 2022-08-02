let timer

function rodar() {
  timer = setTimeout(function() {
    document.querySelector('.demo').innerHTML = 'Rodou!' 
  }, 2000)
}

function parar() {
  clearTimeout(timer)
}


// Analise o código e assinale a alternativa correta:
setTimeout(function() {
  console.log('Ola mundo.')
}, 2000)
 
// O que essa função esta realizando? Espera 2 segundos e executa o console.log().