function verificarPalindromo(str) {
    let cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    
    let reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

let testeString = "A man a plan a canal Panama";
let resultado = verificarPalindromo(testeString);
console.log('A string é um palíndromo?', resultado); 