
// escolher 5 imagens para linha

// criar 3 divs para rolar as imagens

// criar um botão de evento

// ao clicar no botão, dispara a rolagem das imagens em cada div

// para aparecer cada imagem, por dentro do FOR timing de reprodução do código de 0.5s

// 
const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const caixa3 = document.querySelector('#caixa3')
const alavanca = document.querySelector('#alavanca')

let position = 0
let sorteio1 = 0
let sorteio2 = 0
let sorteio3 = 0
let i = 0
let timer = 900

const estruturaCacaNiquel = () => {

    caixa1.style.width = '120px'
    caixa1.style.height = '360px'
    caixa1.style.backgroundImage = "url(icones.png)"
    caixa1.style.backgroundSize = 'cover'
    
    
    caixa2.style.width = '120px'
    caixa2.style.height = '360px'
    caixa2.style.backgroundImage = "url(icones.png)"
    caixa2.style.backgroundSize = 'cover'
    
    caixa3.style.backgroundImage = "url(icones.png)"
    caixa3.style.width = '120px'
    caixa3.style.height = '360px'
    caixa3.style.backgroundSize = 'cover'

}


const startGame = () => {
    // desativa o botão de rodar o game
    alavanca.disabled = true

    // cria uma variável para depois armazenar o setInterval()
    let rodaGame = undefined
    
    // seta para o estado inicial todas as variáveis
    position = 0
    sorteio1 = 0
    sorteio2 = 0
    sorteio3 = 0
    i = 0
    
    // seta estrutura da rolagem
    estruturaCacaNiquel()


    // sorteia em cada variável a posição de parada
    sorteio1 = Math.floor(Math.random() * (8 - 0 + 1) + 1)
    sorteio2 = Math.floor(Math.random() * (8 - 0 + 1) + 1)
    sorteio3 = Math.floor(Math.random() * (8 - 0 + 1) + 1)
    
    
    rodaGame = setInterval(() => {
        
        if (i !== 194) {
            position = 10 * i * 2.5
            caixa1.style.backgroundPosition = `center ${position}px`
            caixa2.style.backgroundPosition = `center ${position}px`
            caixa3.style.backgroundPosition = `center ${position}px`
            i++
        }
        else {
            caixa1.style.backgroundPosition = `center ${sorteio1 * 120}px`
            caixa2.style.backgroundPosition = `center ${sorteio2 * 120}px`
            caixa3.style.backgroundPosition = `center ${sorteio3 * 120}px`
            clearInterval(rodaGame)
            alavanca.disabled = false
        }
        
    }, timer / 30);
    
    
    
}

estruturaCacaNiquel()
alavanca.addEventListener('click', startGame)


