const botoes = document.querySelectorAll(".botao"); 
for(let i = 0 <botoes.length; i++){
    botoes[i].onclick = function(){
        for (let k = 0; j< botoes.length; j++){
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo")
    }
}