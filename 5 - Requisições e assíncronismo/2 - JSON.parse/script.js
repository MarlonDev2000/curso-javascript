// O método JSON.parse() analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string. Uma função reviver opcional pode ser fornecida para executar uma transformação no objeto que será retornado.

let pessoa = '{"nome":"Marlon","idade":90,"caracteristicas":["sorridente","maravilhoso","top"],"estetica":{"altura":1.75,"peso":60}}'

let pessoaParse = JSON.parse(pessoa)