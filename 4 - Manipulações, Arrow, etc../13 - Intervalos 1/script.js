let timer

function comecar(){
  timer = setInterval(showTime, 1)
}

function parar(){
  clearInterval(timer)
}

function showTime() {
  let d = new Date()
  let h = d.getHours()
  let m = d.getMinutes()
  let s = d.getSeconds()
  let ms = d.getMilliseconds()
  let texto = `${h}:${m}:${s}:${ms}`

  document.querySelector('.demo').innerHTML = texto
}

// Uma pesquisadora deseja verificar a temperatura da água de um reservatório a cada 5 minutos utilizando JavaScript. Qual função ela pode usar para verificar a cada período de tempo?

// setInterval()

