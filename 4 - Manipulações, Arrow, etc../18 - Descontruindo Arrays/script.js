let info = ['Marlon Braga', 'Marlon', 'Braga', '@Marlon']

let [nomeCompleto, nome, sobrenome, Instagram] = info

console.log(`Meu nome completo é ${nomeCompleto}, meu nome é ${nome}, meu sobrenome é ${sobrenome} é meu instagram ${Instagram}`)

// No processo de desconstrução de um array, o que devemos fazer na hora de capturar os dados do array anterior?
// R: Setar um novo nome para os dados que virão do array e vão se tornar uma variável.