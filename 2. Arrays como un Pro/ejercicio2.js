/*
En este desafío tienes un array que contiene otros arrays internos, debes retornar un array que tenga los elementos de los otros arrays eliminando los arrays internos y dejando solo los valores, normalmente a esto le llamamos aplanar el array o "Flattening Algorithm".
La solución debería tener un input y output como los siguientes:

Input
solution([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

Output
[1, 2, 3, 4, 5, 6, 7, 8, 9]

*/

// Alternativa 1
function solution(array) {
	let deeptLength = array.lenght; // La cantidad de subarrays es la cantidad de profundidad a la que debemos de aplicarle el 'aplanamiento'
	return array.flat(deeptLength);
}

// Alternativa 2
function solution(array) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			newArray.push(array[i][j]);
		}
	}
	return newArray;
}