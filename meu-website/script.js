// ATIVIDADE - JOGO DE ADIVINHAÇÃO (Adaptado para Web)
// HENRY PORTES

// Gera o número secreto ao carregar a página
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
console.log("Dica para o dev: o número é " + numeroSecreto);

function jogar() {
    // No navegador, usamos o prompt para receber dados
    let n = prompt("Tente adivinhar o número de 1 a 10:");

    // Verifica se o usuário cancelou o prompt
    if (n === null) return;

    // Converte para número para comparar corretamente
    if (parseInt(n) === numeroSecreto) {
        alert("Acertou! 🎉");
        
        // Pergunta se quer jogar de novo e gera novo número
        if(confirm("Quer jogar de novo?")) {
            numeroSecreto = Math.floor(Math.random() * 10) + 1;
            jogar();
        }
    } else {
        alert("Errou! Tente novamente. ❌");
        // Chama a função novamente até acertar (recursividade que você já usou)
        jogar();
    }
}