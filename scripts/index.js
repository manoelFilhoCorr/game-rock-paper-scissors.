//  inicio function active RULES
document.querySelector(".section-rules").style.display = 'none';
const activeRules = () => {
    const secRules = document.querySelector(".section-rules");
    if(secRules.style.display === 'none'){
        secRules.style.display = 'flex';
    }else{
        secRules.style.display = 'none';
    }
}
//  fim function active RULES
// inicio function click select opcao
const clickSelectOpcao = (opcao) => {
    const secOpcoes = document.querySelector(".conteiner-conteudo");
    const secOpcoesSelect = document.querySelector(".conteiner-conteudo-select");
    const buttonOpcoes = document.querySelector(".b-slect-you");
    const imgButtonOpcoes = document.getElementById("img-button-conteudo-game");
    const buttonOpcoesBoot = document.querySelector(".b-slect-boot");
    const imgButtonOpcoesBoot = document.getElementById("img-button-conteudo-game-bott");
    const scoreVictory = document.getElementById("score");
    const titleResul = document.getElementById("title-resul");
    let scoreNumber = Number(scoreVictory.innerHTML);
    // scoreVictory.innerHTML = scoreNumber

    secOpcoes.style.display = 'none';
    secOpcoesSelect.style.display = 'flex';

    // condicao
    if(opcao === 'paper'){
        buttonOpcoes.style.background = 'hsl(230, 89%, 65%)';
        imgButtonOpcoes.src = 'images/icon-paper.svg';
    }else if(opcao === 'scissors'){
        buttonOpcoes.style.background = 'hsl(40, 84%, 53%)';
        imgButtonOpcoes.src = 'images/icon-scissors.svg';
    }else if(opcao === 'rock'){
        buttonOpcoes.style.background = 'hsl(349, 70%, 56%)';
        imgButtonOpcoes.src = 'images/icon-rock.svg';
    };
    
    // sorteio
    let numSorteio = Math.floor(Math.random() * (4 - 1) + 1);

    // validacao
    if(numSorteio === 1){
        buttonOpcoesBoot.style.background = 'hsl(230, 89%, 65%)';
        imgButtonOpcoesBoot.src = 'images/icon-paper.svg';
    }else if(numSorteio === 2){
        buttonOpcoesBoot.style.background = 'hsl(40, 84%, 53%)';
        imgButtonOpcoesBoot.src = 'images/icon-scissors.svg';
    }else if(numSorteio === 3){
        buttonOpcoesBoot.style.background = 'hsl(349, 70%, 56%)';
        imgButtonOpcoesBoot.src = 'images/icon-rock.svg';
    };

    // ganhador
    if(imgButtonOpcoesBoot.src === imgButtonOpcoes.src){
        titleResul.innerHTML = 'EMPATE';
    }else if(
        (opcao === 'paper' && numSorteio === 3) || 
        (opcao === 'scissors' && numSorteio === 1) || 
        (opcao === 'rock' && numSorteio === 2)){

        titleResul.innerHTML = 'YOU WIN';
        scoreNumber += 1;
        buttonOpcoes.className = 'button-game-opcoes b-01 b-slect b-slect-you b-s b-sB';
    }else{
        titleResul.innerHTML = 'YOU LOSE';
        scoreNumber -= 1;
        buttonOpcoesBoot.className += 'button-game-opcoes b-01 b-slect b-boo b-slect-boot b-s b-sB';

    }
    scoreVictory.innerHTML = scoreNumber



    
}
// fim function click select opcao

// inicio function play again
const playAgain = () => {
    const secOpcoes = document.querySelector(".conteiner-conteudo");
    const secOpcoesSelect = document.querySelector(".conteiner-conteudo-select");
    const buttonOpcoes = document.querySelector(".b-slect-you");
    const buttonOpcoesBoot = document.querySelector(".b-slect-boot");



    secOpcoes.style.display = 'flex';
    secOpcoesSelect.style.display = 'none';

    buttonOpcoes.className = 'button-game-opcoes b-01 b-slect b-slect-you b-s';
    buttonOpcoesBoot.className = 'button-game-opcoes b-01 b-slect b-boo b-slect-boot b-s';

}
// fim function play again