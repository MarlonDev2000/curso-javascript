const pokeName = document.querySelector('.pokemon-name')
const pokeNumber = document.querySelector('.pokemon-number')
const pokeType = document.querySelector('.pokemon-type')
const pokeImg = document.querySelector('.pokemon-image')

const form = document.querySelector('.form')
const inputSearch = document.querySelector('.input-search')
const buttonPrev = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')

let searchPoke = 1

const fetchPoke = async (pokemon) => {
  const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

  if(API.status === 200 ) {
    const responseJson = await API.json()
    return responseJson
  }
}

const renderPoke = async (pokemon) => {

  pokeName.innerHTML = 'Carregando!'
  pokeNumber.innerHTML = ''
  pokeType.innerHTML = ''

  const data = await fetchPoke(pokemon)

  if(data) {
    pokeImg.style.display = 'block'
    pokeName.innerHTML = data.name
    pokeNumber.innerHTML = data.id
    pokeType.innerHTML = data.types[0].type.name
    pokeImg.src = data.sprites.versions['generation-v']['black-white'].animated.front_default
    inputSearch.value = ''
    searchPoke = data.id
  } else {
    pokeName.innerHTML = 'Não Encontrado!'
    pokeNumber.innerHTML = ''
    pokeType.innerHTML = ''
    pokeImg.style.display = 'none'
  }

}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  renderPoke(inputSearch.value.toLowerCase())
})

buttonPrev.addEventListener('click', () => {
  if(searchPoke > 1) {
    searchPoke -= 1
    renderPoke(searchPoke)
  }
})

buttonNext.addEventListener('click', () => {
  searchPoke += 1
  renderPoke(searchPoke)
})



renderPoke(searchPoke)