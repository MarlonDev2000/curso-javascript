function trocar() {
  let preto = document.querySelector('button').classList.contains('preto')
  if(preto === true) {
    document.querySelector('button').classList.remove('preto')
    document.querySelector('button').classList.add('verde')
  } else {
    document.querySelector('button').classList.remove('verde')
    document.querySelector('button').classList.add('preto')
  }
}

// Qual função no javascript que verifica se a tag já possui uma classe selecionada na função? contains()