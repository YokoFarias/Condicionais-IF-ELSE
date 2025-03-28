function determinarMenorMaior(a:number,b:number): [number,number] {
    if (a>b) {
        return [a,b];
    } else {
        return [b,a];
    }
}
console.log(determinarMenorMaior(5,10));
module.exports = determinarMenorMaior;

//Implemente o método maiorMenorValor, que recebe como argumentos dois números inteiros: A e B, e retorna dois valores inteiros: o maior e o menor entre eles. A implementação deve considerar as seguintes regras:

//O método deve comparar os dois números e identificar o maior e o menor valor entre eles.
//Ambos os números devem ser considerados válidos para a comparação.