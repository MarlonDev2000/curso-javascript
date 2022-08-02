// Scroll suave
function subirTela() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
}


function monitorarScroll() {
  if(window.scrollY <= 50) {
    document.querySelector('.scroll-button').style.display = 'none'
  } else {
    document.querySelector('.scroll-button').style.display = 'block'
  }
}

window.addEventListener('scroll', monitorarScroll)



