

// CÓDIGO SÍNCRONO
let nome = "Marlon"
let sobrenome = "Braga"
let completo = `${nome} ${sobrenome}`


// CÓDIGO ASSÍNCRONO
// let nome = "Marlon"
// let sobrenome = "Braga"
// let temperatura = Maquina.pegarTemperatura() // ASSÍNCRONA
// let completo = `${nome} ${sobrenome}`


const x = 10;
const y = 20;
let z;

setTimeout(() => {
  z = 30;
}, 10000);

console.log(x);
console.log(y);
console.log(z);

/*
Se esse código fosse sincrono, ele ia atribuir o 10 para o x, o 20 para o y, declarar z, ESPERAR 2 SEGUNDOS e ai atribuir 30 para z, e SÓ DEPOIS mostrar x, então y e depois z.

Mas como o JS executa de forma assíncrona o que acontece na realidade é que ele não espera para tarefas assíncronas terminarem e depois continua executando, ele deixa ela executando em background, e continua executando o resto do código. Então aqui a sequencia dos acontecimentos seria:
atribuir 10 para x
atribuir 20 para y
declarar z
executar algo daqui a 2 segundos
mostrar x que tem valor 10
mostrar y que tem valor 20
mostrar z que não tem valor
ao fim dos 2 segundos atribuir 30 para z.

O setTimeout é assíncrono porque ele pode ficar executando, mas ele não obriga o resto do código a esperar por ele terminar para que a execução do programa possa continuar.

É aquela ideia de fazer uma coisa de cada vez vs a ideia de fazer 5 coisas ao mesmo tempo.
*/
