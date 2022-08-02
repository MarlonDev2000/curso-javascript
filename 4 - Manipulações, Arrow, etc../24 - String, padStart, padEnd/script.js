
// padEnd()
let telefone = '62'
console.log(telefone.padEnd(9, '*'))

// padStart()
let cartao = '5818128496458474'
let lastDigits = cartao.slice(-4)
console.log(lastDigits)
let cartaoMascarado = lastDigits.padStart(16, '*')
console.log(cartaoMascarado)

// EXERCICIO

let str = "9";
str = str.padEnd(4,0);

console.log(str);