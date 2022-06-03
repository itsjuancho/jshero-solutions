/* 
En este desafío tienes un array con una lista de strings que representan el nombre y apellido de varios usuarios, el reto es retornar ese array ordenado alfabéticamente por el apellido.

La solución debería tener un input y output como los siguientes:

Input

solution([
  "Nicolas Molina",
  "Andrea Perez",
  "Zulema Vicente",
  "Juan Amador"
]);

Output

[
  "Juan Amador",
  "Nicolas Molina",
  "Andrea Perez",
  "Zulema Vicente"
]
*/

// Alternativa 1
function solution(array) {
    return array.map(name => name.split(" "))
        .reduce((prev, curr) => {
            let obj = {
                nombre: curr[0],
                apellido: curr[1]
            };
            return [...prev, obj];
        }, [])
        .sort((a, b) => a.apellido.localeCompare(b.apellido))
        .map(item => item.nombre + " " + item.apellido);
}

// Alternativa 2
function solution(array) {
    return array.map(name => name.split(" "))
        .sort((a, b) => a[1].localeCompare(b[1]))
        .map(names => `${names[0]} ${names[1]}`);
}