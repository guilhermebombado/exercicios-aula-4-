let usuarioLogado = true;
let usuarioAdministrador = false; 


let temAcesso = usuarioLogado && usuarioAdministrador;

if (temAcesso) {
    console.log('O usuário tem acesso à funcionalidade.');
} else {
    console.log('O usuário não tem acesso à funcionalidade.');
}