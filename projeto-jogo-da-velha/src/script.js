let jogador = null
let jogadorSelecionado = document.querySelector('#jogador-selecionado')
let vencedor = document.querySelector('label#vencedor-selecionado')

// Aqui será armazenado todas as 9 areas jogaveis em um array
let quadrados = []
for (let index = 1; index <= 9; index++) {
    quadrados.push(document.getElementById(index))
}

// A variavel campo se diz respeito à area jogavel
let campo = ''

mudarJogador('X')

function areaJogavel(id) {
    campo = document.getElementById(id)
    if (campo.innerHTML != '-') {
        return
    }
    if (vencedor.innerHTML == 'X' || vencedor.innerHTML == 'O') {
        return
    }
    campo.innerHTML = jogador
    campo.style.color = 'black'

    if (jogador === 'X') {
        jogador = 'O'
    } else {
        jogador = 'X'
    }
    mudarJogador(jogador)
    checarVencedor()
}


function mudarJogador(valor) {
    jogador = valor
    jogadorSelecionado.innerHTML = jogador
}

function checarVencedor() {
    // Possibilidades de vitória na horizontal  
    if (checarSequencia(quadrados[0].innerHTML, quadrados[1].innerHTML, quadrados[2].innerHTML)) {
        for (let index = 0; index <= 2; index++) {
            if (index == 0 || index == 1 || index == 2) {
                quadrados[index].style.background = '#08CC5D'
                quadrados[index].style.caretColor = 'rgba(0,0,0,0)'
            }
        }
        vencedor.innerHTML = jogador == 'X' ? jogador = 'O' : jogador = 'X'
        mudarJogador(jogador)
    }
    if (checarSequencia(quadrados[3].innerHTML, quadrados[4].innerHTML, quadrados[5].innerHTML)) {
        for (let index = 3; index <= 5; index++) {
            if (index == 3 || index == 4 || index == 5) {
                quadrados[index].style.background = '#08CC5D'
                quadrados[index].style.caretColor = 'rgba(0,0,0,0)'
            }
        }
        vencedor.innerHTML = jogador == 'X' ? jogador = 'O' : jogador = 'X'
        mudarJogador(jogador)
    }
    if (checarSequencia(quadrados[6].innerHTML, quadrados[7].innerHTML, quadrados[8].innerHTML)) {
        for (let index = 6; index <= 8; index++) {
            if (index == 6 || index == 7 || index == 8) {
                quadrados[index].style.background = '#08CC5D'
                quadrados[index].style.caretColor = 'rgba(0,0,0,0)'
            }
        }
        vencedor.innerHTML = jogador == 'X' ? jogador = 'O' : jogador = 'X'
        mudarJogador(jogador)
    }
    // Possibilidades de vitória na vertical
    if (checarSequencia(quadrados[0].innerHTML, quadrados[3].innerHTML, quadrados[6].innerHTML)) {
        for (let index = 0; index <= 6; index++) {
            if (index == 0 || index == 3 || index == 6) {
                quadrados[index].style.background = '#08CC5D'
                quadrados[index].style.caretColor = 'rgba(0,0,0,0)'
            }
        }
        vencedor.innerHTML = jogador == 'X' ? jogador = 'O' : jogador = 'X'
        mudarJogador(jogador)
    }
    if (checarSequencia(quadrados[1].innerHTML, quadrados[4].innerHTML, quadrados[7].innerHTML)) {
        for (let index = 1; index <= 7; index++) {
            if (index == 1 || index == 4 || index == 7) {
                quadrados[index].style.background = '#08CC5D'
                quadrados[index].style.caretColor = 'rgba(0,0,0,0)'
            }
        }
        vencedor.innerHTML = jogador == 'X' ? jogador = 'O' : jogador = 'X'
        mudarJogador(jogador)
    }
    if (checarSequencia(quadrados[2].innerHTML, quadrados[5].innerHTML, quadrados[8].innerHTML)) {
        for (let index = 2; index <= 8; index++) {
            if (index == 2 || index == 5 || index == 8) {
                quadrados[index].style.background = '#08CC5D'
                quadrados[index].style.caretColor = 'rgba(0,0,0,0)'
            }
        }
        vencedor.innerHTML = jogador == 'X' ? jogador = 'O' : jogador = 'X'
        mudarJogador(jogador)
    }
    // Possibilidades de vitória na diagonal
    if (checarSequencia(quadrados[0].innerHTML, quadrados[4].innerHTML, quadrados[8].innerHTML)) {
        for (let index = 0; index <= 8; index++) {
            if (index == 0 || index == 4 || index == 8) {
                quadrados[index].style.background = '#08CC5D'
                quadrados[index].style.caretColor = 'rgba(0,0,0,0)'
            }
        }
        vencedor.innerHTML = jogador == 'X' ? jogador = 'O' : jogador = 'X'
        mudarJogador(jogador)
    }
    if (checarSequencia(quadrados[2].innerHTML, quadrados[4].innerHTML, quadrados[6].innerHTML)) {
        for (let index = 2; index <= 6; index++) {
            if (index == 2 || index == 4 || index == 6) {
                quadrados[index].style.background = '#08CC5D'
                quadrados[index].style.caretColor = 'rgba(0,0,0,0)'
            }
        }

        vencedor.innerHTML = jogador == 'X' ? jogador = 'O' : jogador = 'X'
        mudarJogador(jogador)
    }
}

function checarSequencia(quadrado1, quadrado2, quadrado3) {
    if (quadrado1 != '-' && quadrado1 == quadrado2 && quadrado2 == quadrado3) {
        return true
    } else {
        return false
    }
}

function reiniciar() {
    vencedor.innerHTML = ''
    for (let pos in quadrados) {
        quadrados[pos].innerHTML = '-'
        quadrados[pos].style.color = '#e1e1e1'
        quadrados[pos].style.background = '#e1e1e1'
        quadrados[pos].style.caretColor = '#e1e1e1'
    }
}





