/*
En este desafío tienes un array de números positivos y negativos, tu reto es retornar un objeto con el número de veces que aparece un número.
La solución debería tener un input y output como los siguientes:

Input
solution([1, 2, -3, -1, 2, 4, 4, 1, 45, -1]);

Output
{
  '1': 2,
  '2': 2,
  '4': 3,
  '45': 1,
  '-3': 1,
  '-1': 2
}
*/

// Alternativa 1
function solution(array) {
    let dict = {};
    for (let number of array) {
        dict[number] = (dict[number] || 0) + 1;
    }
    return dict;
}

// Alternativa 2 (lo mismo que arriba pero con reduce)
function solution(array) {
    return array.reduce((prev, current) => {
        prev[current] = (prev[current] || 0) + 1;
        return prev;
    }, {});
}