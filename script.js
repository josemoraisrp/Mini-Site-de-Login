function login() {
    let senhaDigitada = document.getElementById("senha").value;

    let senhaCorreta = "1234";
    let bloqueado = false;

    let mensagem = document.getElementById("mensagem");

    if (senhaDigitada === senhaCorreta && !bloqueado) {
        mensagem.innerText = "Acesso liberado";
        mensagem.style.color = "green";
    } else {
        mensagem.innerText = "Acesso negado";
        mensagem.style.color = "red";
    }
}