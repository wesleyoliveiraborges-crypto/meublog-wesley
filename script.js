const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function(){

    mensagem.textContent = "Parabéns! Você realizou sua primeira interação com JavaScript.";

    botao.textContent = "Obrigado!";
});