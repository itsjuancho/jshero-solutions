/*
Tienes un array con palabras, tu desafío es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

La solución debería tener un input y output como los siguientes:
solution(['amor', 'sol', 'piedra', 'día']);

Output
[ 'amor', 'piedra' ]
*/

// Alternativa 1
function solution(array) {
    return array.filter(word => word.length >= 4);
}

// Alternativa 2
function solution(array) {
    let names = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index].length >= 4) {
            names.push(array[index]);
        }
    }
    return names;
}