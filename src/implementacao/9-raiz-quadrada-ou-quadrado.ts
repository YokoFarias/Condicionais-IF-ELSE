function calcularRaizOuQuadrado(n:number):number {
    if (n>=0) {
        return Math.sqrt(n);

    } else {
        return (n*n);
    }

}
module.exports =calcularRaizOuQuadrado;
/**
Se o número fornecido for 16, o algoritmo deve imprimir a raiz quadrada de 16, que é 4.

Se o número fornecido for -3, o algoritmo deve imprimir o quadrado de -3, que é 9.
Se o número fornecido for 0, o algoritmo deve imprimir a raiz quadrada de 0, que é 0.
 */