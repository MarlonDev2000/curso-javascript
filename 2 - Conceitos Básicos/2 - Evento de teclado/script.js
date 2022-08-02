function digitou(e) {
  if(e.key === 'Enter' && e.ctrlKey === true ) {

    let texto = document.getElementById("campo").value
    console.log(texto)
  }
}

// O keyCode é uma propriedade que podemos verificar:
// O código numérico de uma tecla no teclado de nosso computador.
