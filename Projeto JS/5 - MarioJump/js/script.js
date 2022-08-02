// DADOS INICIAIS
const marioImg = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const gameover = document.querySelector('.game-over')
const start = document.querySelector('.start')
const restart = document.querySelector('.restart')

const audioStart = new Audio('../sounds/audio_game.mp3')
const audioEnd = new Audio('../sounds/audio_game_end.mp3')



// FUNÇÕES
function marioJump() {
  marioImg.classList.add('jump')

  setTimeout(()=>{
    marioImg.classList.remove('jump')
  }, 1000)
}


function startGame() {
  start.style.display = 'none'
  pipe.classList.add('pipe-animation')
  clouds.classList.add('clouds-animation')

  audioStart.play()
  
  const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(marioImg).bottom.replace('px', '');
    
    // Quando o jogo acaba
    if(pipePosition <= 72 && pipePosition > 0 && marioPosition < 75) {
      pipe.style.animation = 'none'
      pipe.style.left = `${pipePosition}px`  
      
      marioImg.style.animation = 'none'
      marioImg.style.bottom = `${marioPosition}px`
      
      marioImg.src = 'images/game-over.png'
      marioImg.style.width = '80px'
      
      audioStart.pause()
      audioEnd.play()

      clouds.style.animation = 'none'
      gameover.style.display = 'block'
      restart.style.display = 'block'
      
      clearInterval(loop)
    } 
  }, 50)
  

  document.addEventListener('keydown',marioJump)
  document.addEventListener('click', marioJump)
}

function restartGame() {
  document.location.reload(true);
}


// EVENTOS
start.addEventListener('click', startGame)
restart.addEventListener('click', restartGame)



