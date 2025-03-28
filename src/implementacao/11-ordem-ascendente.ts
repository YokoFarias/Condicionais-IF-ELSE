function ordenarAscendente(a:number, b:number, c:number): [number, number, number] {
    let numeros: number[] = [a, b, c];
    numeros.sort((x, y) => x - y); // Ordena em ordem crescente
    return [numeros[0], numeros[1], numeros[2]];
}

module.exports= ordenarAscendente;
console.log(ordenarAscendente(6,4,36));

