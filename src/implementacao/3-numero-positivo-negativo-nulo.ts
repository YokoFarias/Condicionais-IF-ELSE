function verificarNumero(n:number):string {
   if (n>0) {
        return "Positivo"
   } else if(n<0){
        return "Negativo"
   } else {
        return "Nulo";
   }   
}
module.exports = verificarNumero;
//# Número positivo, negativo ou nulo
//Escreva um algoritmo para determinar se um dado número N, recebido através do teclado, é POSITIVO, NEGATIVO ou NULO.
