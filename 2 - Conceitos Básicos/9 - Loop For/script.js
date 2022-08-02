// FOR LOOP

let texto = ''

for(let i = 1; i <= 10; i++) {
  texto = texto + i + '<br>'
}

document.getElementById('demo').innerHTML = texto

// FOR IN

let carros = ['Ferrari', 'Fusca', 'Palio', 'Corolla', 'Freemont', 'Civic']

let html = '<ul>'

for(let carro in carros) {
  html += '<li>'+carros[carro]+'</li>'
}

html += '</ul>'

document.getElementById('carro').innerHTML = html

// Qual o resultado exibido no console do código abaixo?

for(let contador = 0; contador < 50; contador +=2) {
 console.log(contador);
}

// Serão impressos somente os números pares, de 0 a 49.
