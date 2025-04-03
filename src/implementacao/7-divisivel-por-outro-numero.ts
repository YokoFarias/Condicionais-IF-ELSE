function verificarDivisivel(a:number,b:number) : string{
    if (a%b==0) {
        return "A é divisivel por B";
    } else {
        return "A não é divisível por B";
    }
}

module.exports = verificarDivisivel;