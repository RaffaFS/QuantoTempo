const btnS = document.querySelector('#btnStart')
const landing = document.querySelector('#landing')
const sistema = document.querySelector('#sistema')
const form = document.querySelector('#form')
const input = document.querySelector('#dataTGT')
const results = document.querySelector('#results')

const title = document.querySelector('#resTitle')
const difInS = document.querySelector('#difInS')
const difInM = document.querySelector('#difInM')
const difInH = document.querySelector('#difInH')
const difInD = document.querySelector('#difInD')

btnS.addEventListener('click', start)
form.addEventListener('submit', calc)

function start(){
    landing.classList.add('hidden')
    sistema.classList.remove('hidden')
}

function calc(e){
    e.preventDefault()
    const agora = new Date()
    const target = new Date(input.value)

    const momentoAtual = agora.getTime()
    const momentoTarget = target.getTime()
    const diferenca = momentoAtual - momentoTarget
    const emS = parseInt(diferenca/1000)
    const emM = parseInt(emS/60)
    const emH = parseInt(emM/60)
    const emD = parseInt(emH/24)

    title.innerText = 'Se a sua máquina do tempo aceita valores...'
    difInS.innerText = `Em segundos, use (-) ${emS}`
    difInM.innerText = `Em minutos, use (-) ${emM}`
    difInH.innerText = `Em horas, use (-) ${emH}`
    difInD.innerText = `Em dias, use (-) ${emD}`
}