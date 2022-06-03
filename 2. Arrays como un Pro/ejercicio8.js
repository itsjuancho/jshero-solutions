/*
En este desafío tienes un array de números positivos y negativos, tu reto es retornar un array ordenado de menor a mayor y dejando los valores sin que se repitan números.

La solución debería tener un input y output como los siguientes:

Input
solution([1, 2, -3, -1, 2, 4, 4, 1, 45, -1]);

Output
[ -3, -1, 1, 2, 4, 45 ]
*/


function solution(array) {
	let numbers = [...new Set(array)];
	return numbers.sort((a, b) => a - b);
}