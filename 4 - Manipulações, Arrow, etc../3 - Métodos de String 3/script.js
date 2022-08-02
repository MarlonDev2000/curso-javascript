let nome = 'Marlon Braga Filho'


// O método replace() retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres). O padrão pode ser uma string ou uma RegExp, e a substituição pode ser uma string ou uma função a ser chamada para cada correspondência. Se o padrão for uma string, apenas a primeira ocorrência será substituída.
let resultadoReplace = nome.replace('Braga', 'Brando')

// O método toUpperCase() retorna o valor da string original convertido em letras maiúsculas.
let resultadoToUpeerCase = nome.toUpperCase()

// O método toLowerCase() retorna o valor da string que foi chamada convertido para minúsculo.
let resultadoToLowerCase = nome.toLowerCase()

// O método trim() remove os espaços em branco (whitespaces) do início e/ou fim de um texto. É considerado espaço em branco (espaço, tabulação, espaço fixo/rígido, etc.) e todo sinal de fim de linha de texto (LF, CR, etc.).
let resultadoTrim = nome.trim()

// O método charAt() retorna o caractere especificado a partir de uma string.
let resultadoCharAt = nome.charAt(7)

// O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
let resultadoSplit = nome.split(' ')

console.log(resultadoSplit)

// Qual será o resultado que será exibido no console, conforme o código a seguir?

let gosto = 'Eu não gosto de Ciências';
let feedback = gosto.replace('Ciências', 'Física');
console.log(feedback);