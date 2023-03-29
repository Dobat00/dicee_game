
// funcao que gera um valor aleatorio
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max -min) +min);
}

function jogo(){
    dado1.innerHTML = getRandomInt(1,7);
    dado2.innerHTML = getRandomInt(1,7);
}

function mudar_imagem(){
    jogo();
    if (dado1.innerHTML == 1){
        dice_img1.src = 'images/dice1.png'
    }else if (dado2.innerHTML == 1){
        dice_img2.src = 'image/dice1.png'
    } 
}

// capturando os elementos (dados) dos jogadores
const dado1= document.getElementById("dice1");
const dado2= document.getElementById("dice2");
const resultado = document.getElementById("resultado");
const dice_img1 = document.getElementById('dice_img1');
const dice_img2 = document.getElementById('dice_img2')

// mudando o valor dos dados quando ha o reload da tela
mudar_imagem();

//mostrando o resultado do player vencedor
if (dado1.innerHTML > dado2.innerHTML){
    resultado.innerHTML = "player 1 venceu!"
} else if(dado2.innerHTML > dado1.innerHTML){
    resultado.innerHTML = "player 2 venceu!"
} else{
    resultado.innerHTML = 'empate !'
}

