document.querySelector("#titulo").innerHTML = "Mudando o titulo"
document.querySelectorAll('li')

let lista = document.querySelectorAll('li')
for(let i in lista) {
  console.log(lista[i].innerHTML)
}

let body = document.querySelector('body')
body.style.color = '#FF0000'

// Qual a diferença entre o querySelector e o querySelectorAll? O querySelector retorna o primeiro elemento presente no código, enquanto que o querySelectorAll retornará um array de elementos presentes no código.