function calcularRaizOuQuadrado(n: number): number {
    if (n >= 0) {
        if (n === 0) return 0; // A raiz quadrada de 0 é 0

        let raiz = 1; // Começamos com um chute inicial pequeno

        // Aumentamos a raiz enquanto o próximo valor ainda for válido
        while ((raiz + 1) * (raiz + 1) < n) {
            raiz++;
        }

        return raiz; // Retorna a melhor aproximação encontrada
    } else {
        return n * n; // Se for negativo, retorna o quadrado
    }
}

// Testes
console.log(calcularRaizOuQuadrado(16));  // Deve retornar 4
module.exports =calcularRaizOuQuadrado;
/**
Se o número fornecido for 16, o algoritmo deve imprimir a raiz quadrada de 16, que é 4.

Se o número fornecido for -3, o algoritmo deve imprimir o quadrado de -3, que é 9.
Se o número fornecido for 0, o algoritmo deve imprimir a raiz quadrada de 0, que é 0.
 */