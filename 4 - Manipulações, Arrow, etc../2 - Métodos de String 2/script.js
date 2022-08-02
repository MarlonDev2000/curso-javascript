let nome = 'Marlon Braga Filho'

// O método slice() extrai uma parte de uma string e a retorna como uma nova string, sem modificar a string original.
let resultadoSlice = nome.slice(13)

// O método substring() retorna a parte da string entre os índices inicial e final, ou até o final da string.
let resultadoSubString = nome.substring(13)

// O método substr() retorna uma parte da string, começando no índice especificado e estendendo-se por um determinado número de caracteres posteriormente.
let resultadoSubSrt = nome.substr(0, 13)

console.log(resultadoSubSrt)

/*

[JS] Observe abaixo as proposições e julgue V para verdadeiro e F para falso. I - O método slice() permite que apenas um de seus parâmetros receba um número negativo. II - O método substring() não permite números negativos como argumento. III - Se o primeiro argumento do método substr() for um número negativo, a contagem será feita da esquerda para a direita.

I - F; II - V; III - F;

*/