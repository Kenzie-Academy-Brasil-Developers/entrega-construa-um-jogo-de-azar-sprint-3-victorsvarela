
// escolher 5 imagens para linha

// criar 3 divs para rolar as imagens

// criar um botão de evento

// ao clicar no botão, dispara a rolagem das imagens em cada div

// para aparecer cada imagem, por dentro do FOR timing de reprodução do código de 0.5s

// 
const caixa1 = document.querySelector('.jogo_caixa1')
const caixa2 = document.querySelector('.jogo_caixa2')
const caixa3 = document.querySelector('.jogo_caixa3')
let position = 0
let sorteio1 = 0
let sorteio2 = 0
let sorteio3 = 0

sorteio1 = Math.floor(Math.random() * (8 - 0 + 1) + 1)
sorteio2 = Math.floor(Math.random() * (8 - 0 + 1) + 1)
sorteio3 = Math.floor(Math.random() * (8 - 0 + 1) + 1)

let i = 0

setInterval(() => {
    
    if (i !== 194){
        position = 10 * i * 2.5
        caixa1.style.backgroundPosition = `center ${position}px`
        caixa2.style.backgroundPosition = `center ${position}px`
        caixa3.style.backgroundPosition = `center ${position}px`
        i++
        console.log(position)
        console.log(i)
    }
    else{
        caixa1.style.backgroundPosition = `center ${sorteio1*193}px`
        caixa2.style.backgroundPosition = `center ${sorteio2*193}px`
        caixa3.style.backgroundPosition = `center ${sorteio3*193}px`
    }
    
}, 900/30);


caixa1.style.width = '193px'
caixa1.style.height = '193px'
caixa1.style.position = 'block'
caixa1.style.backgroundImage = "url(icones.png)"

caixa2.style.width = '193px'
caixa2.style.height = '193px'
caixa2.style.backgroundImage = "url(icones.png)"
caixa2.style.position = 'block'

caixa3.style.backgroundImage = "url(icones.png)"
caixa3.style.width = '193px'
caixa3.style.height = '193px'
caixa3.style.position = 'block'


console.log('fim do código')