function calcularRaizOuQuadrado(n:number):number {
    if (n>= 0) {
        return Math.sqrt(n)
    } else {
        return (n*n);
    }
}

module.exports =calcularRaizOuQuadrado;
console.log(calcularRaizOuQuadrado(16));


