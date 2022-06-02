/*
En este desafío vas a tener un string y debes buscar si ese string tiene un término de búsqueda, por ejemplo verificar si dentro de la frase "Ana lava la tina" está el término "ana" y si lo tiene retornar un true de lo contrario retornar un false, debes tener en cuenta que debe encontrar coincidencias, así la el término de búsqueda sea mayúscula o minúscula.

La solución debería tener un input y output como los siguientes:

solution("Ana lava la tina", "ana");
solution("Santiago", "tiago");
solution("Nicolas", "ana");

Output:
true
true
false
*/

// Alternativa 1
function solution(word, query) {
    return word.toLowerCase()
                .split(" ")
                .includes(query);
}

// Alternativa 2
function solution(word, query) {
    let result = false;
    let words = word.toLowerCase().split("");
    for (let index = 0; index < words.length; index++) {
        if (words[index].includes(query)) {
            result = true;
        }
    }
    return result;
}