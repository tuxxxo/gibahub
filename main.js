const botoes = document.querySelectorAll(".botao"); 
const textos = document.querySelectorAll(".aba-conteudo");
for(let i = 0; i <botoes.length; i++){
    botoes[i].onclick = function(){
        for (let j = 0; j< botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll (".contador");
const tempoObjetivo1 = new Date ("2024-12-22");
let tempoAtual = new Date();

for (let i=0; i < contadores.length; i++){
    contadores[i].textContent = calculaTempo(tempos[i]);
}

contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal =- tempoObjetivo1 - tempoAtual
    
}

contadores[0].textContent = tempoObjetivo1 - tempoAtual;