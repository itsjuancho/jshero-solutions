/*
En este desafío tienes un array de números, usando la función map debes retornar todos los números del array multiplicados por dos.

La solución debería tener un input y output como los siguientes:

Input
solution([2, 4, 5, 6]);

Output
[4,8,10,12]
*/

// Alternativa 1
function solution(array) {
	return array.map(n => n * 2);
}; 

// Alternativa 2
function solution(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index] * 2;
        newArray.push(element);
    }
    return newArray;
}