function ordenarAscendente(a:number, b:number, c:number): [number, number, number] {
    let menor:number= a;
    let maior:number= a;
    let meio:number=a;

    if (b<menor)
        menor=b;
    if(c<menor)
        menor=c;
    if(b>maior)
        maior=b;
    if(c>maior)
        maior=c;

    meio=a+b+c-menor-maior;

    return [menor,meio,maior];


}

module.exports= ordenarAscendente;
console.log(ordenarAscendente(6,4,36));

/**Implemente o método ordenarAscendente, que recebe como argumentos três números inteiros: A, B, e C, e retorna os três valores organizados em ordem ascendente (do menor para o maior). A implementação deve considerar as seguintes regras:

O método deve comparar os três números e retornar os valores organizados em ordem crescente.
Todos os três números devem ser considerados válidos para a comparação.
Exemplos:
Quando a entrada for "3", "1" e "2", a saída deve ser "1, 2, 3".
Quando a entrada for "5", "8" e "2", a saída deve ser "2, 5, 8".
Quando a entrada for "-1", "0" e "-5", a saída deve ser "-5, -1, 0".
Quando a entrada for "7", "7" e "7", a saída deve ser "7, 7, 7".
Quando a entrada for "50", "25" e "75", a saída deve ser "25, 50, 75". */