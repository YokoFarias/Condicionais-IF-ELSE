function determinarMaiorMenorDeQuatro(a:number, b:number, c:number, d:number): [number,number]  {
    let maior: number;
    maior = Math.max(a, b, c, d);
    let menor: number;
    menor = Math.min(a, b, c, d);

    return [maior, menor];
}

module.exports= determinarMaiorMenorDeQuatro;
console.log(determinarMaiorMenorDeQuatro(1,2,3,4));