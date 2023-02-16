// Variáveis de eventos
let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const inputNumber = document.querySelector('#inputNumber')
const pTry = document.querySelector('.pTry')

//Eventos:
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//funções callback caso o usuário queira retornar para tentar novamente
function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
function removeTry() {
  pTry.classList.add('hid')
}

function toggleTry() {
  pTry.classList.remove('hid')
  setTimeout(removeTry, 1000 * 1)
  //Toda vez que é resetado, limpar o input
  inputNumber.value = ''
  //Acrescenta +1 tentativa
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  pTry.classList.add('hide')
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

// Reseta as tentativas
function resetX() {
  xAttempts = 1
}

function handleTryClick(event) {
  event.preventDefault() // não faça o padrão desse evento

  if (Number(inputNumber.value) < 0) {
    alert('Digite apenas números entre 0 e 10.')
    resetX()
  } else if (Number(inputNumber.value) > 10) {
    alert('Digite apenas números entre 0 e 10.')
    resetX()
  }

  if (inputNumber.value == '') {
    alert(`Por favor, digite algum número.`)
    inputNumber.value = ''
    resetX()
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
  }

  toggleTry()
}
