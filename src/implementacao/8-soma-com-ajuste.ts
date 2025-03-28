function somaComAjuste(x:number,y:number) :number {
   let z:number;
   z=x+y;

   if (z>20) {
        return (z+8);
   } else {
        return (z-5);
   }
}

/**

Calcule a soma de X e Y com resultado Z.
Ajustar o valor da soma Z:

Se o valor da soma Z for maior que 20, então adicione 8 ao valor da soma e apresente o resultado ajustado.
Se o valor da soma Z for menor ou igual a 20, então subtraia 5 do valor da soma e apresente o resultado ajustado.
Imprimir o resultado ajustado:

Exiba o resultado ajustado de acordo com as regras mencionadas.
Exemplo de Funcionamento
Se X for 15 e Y for 10:

A soma Z é 15 + 10 = 25.
Como 25 é maior que 20, adicione 8: 25 + 8 = 33.
O algoritmo deve imprimir "33".
Se X for 12 e Y for 7:

A soma Z é 12 + 7 = 19.
Como 19 é menor ou igual a 20, subtraia 5: 19 - 5 = 14.
O algoritmo deve imprimir "14". */
console.log(somaComAjuste(15,10));