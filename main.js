const botoes = document.querySelectorAll(".botao"); 
for(let i = 0 <botoes.length; j++){
    botoes[i].onclick = function(){
        for (let k = 0; < botoes.length; j++){
            botoes[j].classList.remove("ativo");
        }
    }
}