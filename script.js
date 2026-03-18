function login() {
    let senhaDigitada = document.getElementById("senha").value;
    let senhaCorreta = "1234";
    let bloqueado = false;

    if (senhaDigitada === senhaCorreta && !bloqueado) {
        document.querySelector(".container").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        let msg = document.getElementById("mensagem");
        msg.innerText = "Acesso negado ❌";
        msg.style.color = "red";
    }
}

function logout() {
    document.querySelector(".container").style.display = "block";
    document.getElementById("dashboard").style.display = "none";

    document.getElementById("senha").value = "";
}

function mostrar(pagina) {
    let paginas = document.querySelectorAll(".pagina");

    paginas.forEach(p => {
        p.classList.remove("ativa");
    });

    let atual = document.getElementById(pagina);

    setTimeout(() => {
        atual.classList.add("ativa");
    }, 50);
}
