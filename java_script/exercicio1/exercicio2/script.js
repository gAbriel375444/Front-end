let nome = "Gabriel Silva Oliveira";
let botao = document.getElementById("mostrar");
let mensagem = document.getElementById("mensagem");


//adicionando um evento a função botão
//digo a função começa quando dou um click
botao.addEventListener("click", function ()
{
   
    mensagem.innerText = "Aluno: " + nome;

    alert("AAAAAAAAAAAAAAAA")

});