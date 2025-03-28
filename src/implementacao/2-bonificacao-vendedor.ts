function calcularBonificacao(valor:number, qtd:number) {
    let total:number;
    total=valor+qtd;
    if (total>100) {
        return "Bonificação de 10% para o vendedor!";
    }
    return total;
}
module.exports = calcularBonificacao;
//Escreva um algoritmo que leia o valor unitário e a quantidade vendida de um produto e apresente o valor total da venda. Caso o valor total da venda seja superior a R$100,00, mostrar a mensagem "Bonificação de 10% para o vendedor!".
