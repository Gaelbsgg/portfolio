// ScrollToUp

// Exibir o botão quando a página for rolada para baixo
window.onscroll = function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Função para rolar a página de volta ao topo
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Projeto 1 - KeyPassword

// * Ligando os elementos Js com as classes do HTML
let sliderElement = document.querySelector("#slider-projeto1");
let buttonElement = document.querySelector("#button-projeto1");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let maiusculoElement = document.querySelector("#maiusculo");
let minusculoElement = document.querySelector("#minusculo");
let numerosElement = document.querySelector("#numeros");

let novaSenha = "";

// * Definindo qual a quantidade de caracteres contidos na senha a partir do "slider"

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

// * Função que gera a senha com base no valor definido pelo cliente e dentro do charset (randômica)

function generatePassword(){
    let charset = "";

    if (maiusculoElement.checked) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (minusculoElement.checked) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numerosElement.checked) {
        charset += "1234567890";
    }

    if (charset === "") {
        alert("Por favor, selecione ao menos um tipo de caractere.");
        return;
    }

    let pass = "";
    
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
 
    // * Elemento que vai remover e "revelar a senha gerada"        

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}
