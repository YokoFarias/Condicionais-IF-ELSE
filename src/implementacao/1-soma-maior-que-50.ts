function somaMaiorQueCinquenta(): number | string {
    const valor1: number = 30; // Defina o primeiro valor
    const valor2: number = 25; // Defina o segundo valor
    const soma: number = valor1 + valor2; // Calcula a soma dos valores

    // Verifica se a soma é maior que 50
    if (soma > 50) {
        return soma; // Retorna a soma se for maior que 50
    }

    return "A soma não é maior que 50"; // Retorna uma mensagem caso a soma não ultrapasse 50
}

module.exports = somaMaiorQueCinquenta;
