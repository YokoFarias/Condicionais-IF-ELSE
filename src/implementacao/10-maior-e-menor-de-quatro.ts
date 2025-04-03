function determinarMaiorMenorDeQuatro(a: number, b: number, c: number, d: number): [number, number] {
    let maior = a;
    let menor = a;

    // Comparando para encontrar o maior número
    if (b > maior) {
        maior = b;
    }
    if (c > maior) {
        maior = c;
    }
    if (d > maior) {
        maior = d;
    }

    // Comparando para encontrar o menor número
    if (b < menor) {
        menor = b;
    }
    if (c < menor) {
        menor = c;
    }
    if (d < menor) {
        menor = d;
    }

    return [maior, menor];
}

module.exports= determinarMaiorMenorDeQuatro;

// Testes
console.log(determinarMaiorMenorDeQuatro(1, 2, 3, 4)); // [4, 1]
console.log(determinarMaiorMenorDeQuatro(1,2,9,4));