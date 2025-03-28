function somaMaiorQueCinquenta(num1: number, num2: number):number | string {
    let soma = num1 + num2;
    if (soma > 50) {
        return soma;
    }
    return "A soma não é maior que 50.";

}
//console.log(somaMaiorQueCinquenta(35,80));
module.exports = somaMaiorQueCinquenta;
