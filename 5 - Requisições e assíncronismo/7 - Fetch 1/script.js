function loadPosts() {
  document.getElementById('posts').innerHTML = 'Carregando...'

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(resultado) {
      return resultado.json()
    })
    .then(function(json) {
      document.getElementById('posts').innerHTML = `${json.length} Usuários`
    })
    .catch(function(error) {
      console.log("Deu problema: "+error)
    })
}