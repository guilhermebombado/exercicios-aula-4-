function verificarMaiorIdade(idade) {
    return idade >= 18;
}

let idadePessoa = 20; 
let maiorDeIdade = verificarMaiorIdade(idadePessoa);
console.log('A pessoa é maior de idade:', maiorDeIdade);