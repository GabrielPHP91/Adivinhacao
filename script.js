// Variáveis de eventos
let randomNumber = Math.round(Math.random() * 10)

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const inputNumber = document.querySelector('#inputNumber')

//Eventos:
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//funções callback caso o usuário queira retornar para tentar novamente
function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

let xAttempts = 1

function handleTryClick(event) {
  event.preventDefault() // não faça o padrão desse evento
  
  if (inputNumber.value == '') {
    alert(`Por favor, digite algum número.`)
    inputNumber.value = ''
  }

  //Faz um Check de quantas tentativas foram para retornar se foram (tentativa) ou (tentativas)
  let check = xAttempts == 1
  let tentativas = check ? 'tentativa' : 'tentativas'

  //Faz a troca de tela caso o usuário tenha acertado o número que foi pensado
  if (Number(inputNumber.value) == randomNumber) {
    //Deixa invisível ou visível as screens
    toggleScreen()
    //Seleciona o texto h2 e substitui com o número de tentativas
    screen2.querySelector(
      'h2'
    ).innerText = `Você acertou em ${xAttempts} ${tentativas}.`
    
    screen2.querySelector(
      'p'
    ).innerText = `O número que eu pensei era ${randomNumber}.`
  } else if (Number(inputNumber.value) < 0) {
    alert('Digite apenas números entre 0 e 10.')
  } else if (Number(inputNumber.value) > 10) {
    alert('Digite apenas números entre 0 e 10.')
  }
  //Toda vez que é resetado, limpar o input
  inputNumber.value = ''
  //Acrescenta +1 tentativa
  xAttempts++
}
