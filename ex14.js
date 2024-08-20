function encontrarMaiorNumero(num1, num2, num3) {
    
    let maior = num1;
    
    
    if (num2 > maior) {
        maior = num2;
    }
    

    if (num3 > maior) {
        maior = num3;
    }
    
    return maior;
}


let numero1 = 10;
let numero2 = 20;
let numero3 = 15;
let maiorNumero = encontrarMaiorNumero(numero1, numero2, numero3);
console.log('O maior número é:', maiorNumero);