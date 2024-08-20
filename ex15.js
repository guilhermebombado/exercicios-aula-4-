function calculaPotencia(base, expoente) {
    
    return base ** expoente;
}


let base = 2;
let expoente = 3;
let resultado = calculaPotencia(base, expoente);
console.log(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`);