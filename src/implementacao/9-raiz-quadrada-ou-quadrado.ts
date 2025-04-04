function calcularRaizOuQuadrado(n: number): string {
    if (n >= 0) {
        if (n === 0) return "A raiz quadrada de 0 é 0."; // Caso especial para 0

        let raiz = 1; // Começamos com um chute inicial pequeno

        // Aumentamos a raiz enquanto o próximo valor ainda for válido
        while ((raiz + 1) * (raiz + 1) <= n) {
            raiz++;
        }

        // Se a raiz ao quadrado for exatamente n, é um quadrado perfeito
        if (raiz * raiz === n) {
            return `A raiz quadrada de ${n} é ${raiz}.`;
        } else {
            return `A raiz quadrada aproximada de ${n} é ${raiz} (não é uma raiz perfeita).`;
        }
    } else {
        return `O quadrado de ${n} é ${n * n}.`;
    }
}

// Testes
console.log(calcularRaizOuQuadrado(16));  // Deve retornar "A raiz quadrada de 16 é 4."
console.log(calcularRaizOuQuadrado(-3));  // Deve retornar "O quadrado de -3 é 9."
console.log(calcularRaizOuQuadrado(0));   // Deve retornar "A raiz quadrada de 0 é 0."
console.log(calcularRaizOuQuadrado(25));  // Deve retornar "A raiz quadrada de 25 é 5."
console.log(calcularRaizOuQuadrado(10));  // Deve retornar "A raiz quadrada aproximada de 10 é 3 (não é uma raiz perfeita)."
console.log(calcularRaizOuQuadrado(-7));  // Deve retornar "O quadrado de -7 é 49."

module.exports = calcularRaizOuQuadrado;
