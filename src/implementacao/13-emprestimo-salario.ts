function verificarEmprestimo(salarioBruto: number, valorPrestacao: number): boolean {
    // Calcula 30% do salário bruto
    let limite = salarioBruto * 0.3;

    // Verifica se o valor da prestação está dentro do limite permitido
    if (valorPrestacao <= limite) {
        return true;  // Empréstimo aprovado
    } else {
        return false; // Empréstimo negado
    }
}

// Exemplos de uso
console.log(verificarEmprestimo(3000, 900));   // true
console.log(verificarEmprestimo(4000, 1500));  // false
console.log(verificarEmprestimo(5000, 1200));  // true
