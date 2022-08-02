document.body.addEventListener('keypress', (e) => {
  playSound(e.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click', ()=>{
  let song = document.querySelector('#input').value


  if(song !== '') {
    let songArray = song.split('')
    playComposition(songArray)
  }
})

const playSound = (key) => {
  let audioElement = document.querySelector(`#s_${key}`)
  let keyElement = document.querySelector(`div[data-key="${key}"]`)

  if(audioElement) {
    audioElement.currentTime = 0
    audioElement.play()
  }

  if(keyElement) {
    keyElement.classList.add('active')
    setTimeout(()=>{
      keyElement.classList.remove('active')
    }, 300)
  }
}

const playComposition = (songArray) => {
  let wait = 0


  for(let songItem of songArray) {
    setTimeout(()=>{
      playSound(`key${songItem}`)
    }, wait)
    
    wait = wait + 350
  }
}