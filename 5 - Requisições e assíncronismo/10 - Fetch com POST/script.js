async function inserirPosts() {
  document.querySelector('#posts').innerHTML = "Carregando..."

  let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Titulo de teste',
      body: 'Corpo de teste',
      userId: 4
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  let json = await req.json()

  document.querySelector('#posts').innerHTML = "Post publicado com sucesso!"
  console.log(json)
}