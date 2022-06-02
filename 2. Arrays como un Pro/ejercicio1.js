/* ENUNCIADO:
En este desafío recibirás dos arrays de números como parámetros de entrada y debes retornar un array que tenga los dos arrays unidos.
La solución debería tener un input y output como los siguientes. 

El input de la siguiente manera:
solution([1, 2, 3], [4, 5, 6]);
solution(["A", "B", "C"], ["D", "E", "H"]);

Y su output, así:
[1, 2, 3, 4, 5 , 6]
["A", "B", "C", "D", "E", "H"]
*/

// Alternativa 1
function solution(arrayA, arrayB) {
	return [...arrayA, ...arrayB];
}

// Alternativa 2
function solution(arrayA, arrayB) {
	return arrayA.concat(arrayB);
}