function ordenarDescendente(a: number, b: number, c: number): number[] {
    // Criamos um array com os números e ordenamos de forma descendente
    return [a, b, c].sort((x, y) => y - x);
}
module.exports = ordenarDescendente;
// Testes
console.log(ordenarDescendente(3, 1, 2));   // Saída: [3, 2, 1]
console.log(ordenarDescendente(5, 8, 2));   // Saída: [8, 5, 2]
console.log(ordenarDescendente(-1, 0, -5)); // Saída: [0, -1, -5]
console.log(ordenarDescendente(7, 7, 7));   // Saída: [7, 7, 7]
console.log(ordenarDescendente(50, 25, 75)); // Saída: [75, 50, 25]
