
// escolher 5 imagens para linha

// criar 3 divs para rolar as imagens

// criar um botão de evento

// ao clicar no botão, dispara a rolagem das imagens em cada div

// para aparecer cada imagem, por dentro do FOR timing de reprodução do código de 0.5s

//
const body = document.querySelector('body')
const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const caixa3 = document.querySelector('#caixa3')
const alavanca = document.querySelector('#alavanca')

const valdemort = document.createElement('img')
const derrota = new Audio()
const btnJogarNovamente = document.createElement('button')
const soHarry = document.createElement('video')


let altura = 97.46
let largura = 64.33

const estruturaCacaNiquel = () => {


    caixa1.style.width = `${largura}px`
    caixa1.style.height = `${altura}px`
    caixa1.style.backgroundImage = "url(icones.png)"
    caixa1.style.backgroundSize = 'cover'
    caixa1.style.backgroundPosition = 'center'
    
    
    caixa2.style.width = `${largura}px`
    caixa2.style.height = `${altura}px`
    caixa2.style.backgroundImage = "url(icones.png)"
    caixa2.style.backgroundSize = 'cover'
    caixa2.style.backgroundPosition = 'center'
    
    caixa3.style.width = `${largura}px`
    caixa3.style.height = `${altura}px`
    caixa3.style.backgroundImage = "url(icones.png)"
    caixa3.style.backgroundSize = 'cover'
    caixa3.style.backgroundPosition = 'center'

}

const baixaLavanca = () => {

    alavanca.style.transform = 'translateY(40px)'

}

const sobeLavanca = () => {

    alavanca.style.transform = 'translateY(0px)'

}

const apagaDerrota = () => {

    valdemort.classList.remove('valdemort')
    btnJogarNovamente.classList.remove('btnJogarNovamente')
    
    //body.remove(msgDerrota)
    body.removeChild(valdemort)
    body.removeChild(btnJogarNovamente)
    

    soHarry.classList.remove('soHarry')
    btnJogarNovamente.classList.remove('btnJogarNovamente')

    //body.removeChild(msgVitoria)
    body.removeChild(soHarry)
    body.removeChild(btnJogarNovamente)

    //console.log('cheguei ate aqui')

}

//const apagaVitoria = () => {
//}


const condicaoVitoria = (sorteio1, sorteio2, sorteio3) => {

    if (sorteio1 !== sorteio2 || sorteio1 !== sorteio3 || sorteio2 !== sorteio3){ 
        
        const msgDerrota = document.createElement('span')
        
        msgDerrota.innerText = 'Derrota'
        msgDerrota.classList.add('vitoria')

        valdemort.src = "./valdemort-derrota.jpg"
        valdemort.classList.add('valdemort')
        
        derrota.src = "./audio-avadakedavraptbr.m4a"
        derrota.autoplay = true
        
        btnJogarNovamente.innerText = 'Jogar Novamente'
        btnJogarNovamente.classList.add('btnJogarNovamente')
        
        body.appendChild(msgDerrota)
        body.appendChild(valdemort)
        body.appendChild(btnJogarNovamente)
        
    }
    else {
        const msgVitoria = document.createElement('span')
        
        msgVitoria.innerText = 'Vitória'
        msgVitoria.classList.add('vitoria')

        soHarry.src = './soharrycut.mp4'
        soHarry.muted = false
        soHarry.classList.add('soHarry')
        soHarry.autoplay = true
        
        btnJogarNovamente.innerText = 'Jogar Novamente'
        btnJogarNovamente.classList.add('btnJogarNovamente')
        
        body.appendChild(msgVitoria)
        body.appendChild(soHarry)
        body.appendChild(btnJogarNovamente)
    }
    
    
    console.log(sorteio1, sorteio2, sorteio3)
    
}






const startGame = () => {

    baixaLavanca()

    let position = 0
    let sorteio1 = 0
    let sorteio2 = 0
    let sorteio3 = 0
    let i = 0
    let timer = 900
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
            caixa2.style.backgroundPosition = `center ${-position}px`
            caixa3.style.backgroundPosition = `center ${position}px`
            i++

            if (i === 10){
                sobeLavanca()
            }

        }
        else {
            caixa1.style.backgroundPosition = `center ${sorteio1 * largura + 20}px`
            caixa2.style.backgroundPosition = `center ${sorteio2 * largura + 20}px`
            caixa3.style.backgroundPosition = `center ${sorteio3 * largura + 20}px`
            condicaoVitoria(sorteio1, sorteio2, sorteio3)
            clearInterval(rodaGame)
            alavanca.disabled = false
            
        }
        
    }, timer / 30);

    
    
    
}

estruturaCacaNiquel()
alavanca.addEventListener('click', startGame)
btnJogarNovamente.addEventListener('click', apagaDerrota)


