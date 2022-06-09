/*
Lo mismo que el anterior ejercicio (11), pero en vez de reemplazar, eliminar un elemento sin modificar el array original.
*/

function solution(array, index) {
	let newArray = array.filter((value, indexValue) => indexValue != index);
	return newArray;
}