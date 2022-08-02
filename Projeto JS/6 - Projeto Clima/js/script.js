// DADOS INICIAIS


// FUNÇÕES

// BUSCAR INFORMAÇÕES NA API
const tempSearch = async (e) => {
  e.preventDefault()
  let inputSearch = document.querySelector('#searchInput').value

  if(inputSearch !== '') {
    showWarning('Carregando!')

    let API_URL = `http://api.weatherapi.com/v1/current.json?key=3330a4e6e26449979a5140537222307&q=${encodeURI(inputSearch)}&aqi=no`

    let result = await fetch(API_URL)
    let jsonResult = await result.json()


    if(jsonResult.current && jsonResult.location) {
      showTempInfo({
        city: jsonResult.location.name,
        country: jsonResult.location.country,
        region: jsonResult.location.region,
        tempC: jsonResult.current.temp_c,
        windKm: jsonResult.current.wind_kph,
        tempText: jsonResult.current.condition.text,
        tempIcon: jsonResult.current.condition.icon
      })
      showWarning('')
    } else if(jsonResult.error) {
      showWarning('Não encontramos esta localização.')
      clearInfo()
    }
  } else if (inputSearch === ''){
    showWarning('Escolha uma localização')
    clearInfo()
  }
}

// MOSTRAR ERRO
const showWarning = (msg) => {
  document.querySelector('.aviso').innerHTML = msg
}

// MOSTRAR INFORMAÇÕES NA TELA
const showTempInfo = (jsonResult) => {

  document.querySelector('.titulo').innerHTML = `${jsonResult.city}`
  document.querySelector('.subtitulo1').innerHTML = `${jsonResult.region},`
  document.querySelector('.subtitulo2').innerHTML = `${jsonResult.country}`

  document.querySelector('.temp-info').innerHTML = `${jsonResult.tempC}<sup class="temp-info-celcius">ºC</sup>`
  document.querySelector('.temp img').src = `${jsonResult.tempIcon}`
  document.querySelector('.temp-text').innerHTML = `${jsonResult.tempText}`
  document.querySelector('.vento-info').innerHTML = `${jsonResult.windKm} km/h`
}

// LIMPAR INFORMAÇÕES DA TELA
const clearInfo = () => {
  document.querySelector('.titulo').innerHTML = `--`
  document.querySelector('.subtitulo1').innerHTML = `--,`
  document.querySelector('.subtitulo2').innerHTML = `--`

  document.querySelector('.temp-info').innerHTML = `--`
  document.querySelector('.temp img').style.display = 'none'
  document.querySelector('.temp-text').innerHTML = `--`
  document.querySelector('.vento-info').innerHTML = `--km/h`
}

// EVENTOS

// BOTÃO PESQUISAR
document.querySelector('.buscar').addEventListener('submit', tempSearch)