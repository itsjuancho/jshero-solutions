/*
En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python, tu reto es hacer un método que retorne el número de palabras totales que tiene el array.

La solución debería tener un input y output como los siguientes:

Input

solution([
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]);

Output

20
*/

// Alternativa 1
function solution(lines) {
    return lines.reduce((prev, current) => {
        let quantityWords = current.split(" ").length;
        return prev + quantityWords;
    }, 0);
}

// Alternativa 2
function solution(lines) {
    let count = 0;
    for (let i = 0; i < lines.length; i++) {
        let words = lines[i].split(" ");
        let quantityWords = words.length;
        count += quantityWords;
    }
    return count;
}