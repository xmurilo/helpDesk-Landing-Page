const header = document.querySelector('.header');
const listaMenuHeader = document.querySelector('.lista-menu');
function activeScroll() {
  header.classList.toggle('ativo', scrollY > 550);
  listaMenuHeader.classList.toggle('mudarCorMenu', scrollY > 550);
}
window.addEventListener('scroll', activeScroll);

const clientes = document.querySelectorAll('.clientes');
const setaVoltar = document.querySelector('.img-seta-voltar');
const setaAvancar = document.querySelector('.img-seta-avancar');
let clienteAtual = 0;

setaAvancar.addEventListener('click', function () {
  if (clienteAtual === clientes.length - 1) {
    return;
  }
  clienteAtual++;
  esconderCliente();
  mostrarCliente();
  mostrarOuEsconderSetas();
});

setaVoltar.addEventListener('click', function () {
  if (clienteAtual == 0) {
    return;
  }
  clienteAtual--;
  esconderCliente();
  mostrarCliente();
  mostrarOuEsconderSetas();
});

function esconderCliente() {
  const clienteAberto = document.querySelector('.mostrar');
  clienteAberto.classList.remove('mostrar');
}

function mostrarCliente() {
  clientes[clienteAtual].classList.add('mostrar');
}

function mostrarOuEsconderSetas() {
  if (clienteAtual !== 0) {
    setaVoltar.classList.remove('opacidade-seta');
  } else {
    setaVoltar.classList.add('opacidade-seta');
  }
  if (clienteAtual !== 0 && clienteAtual === clientes.length - 1) {
    setaAvancar.classList.add('opacidade-seta');
  } else {
    setaAvancar.classList.remove('opacidade-seta');
  }
}

// Validação de formulario
const form = document.querySelector('.formulario');
const inputForm = document.querySelectorAll('.input-form');
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Impedir que o formulario seja enviado sem nenhum campo preenchido
form.addEventListener('submit', event => {
  event.preventDefault();
  for (let i = 0; i < inputForm.length; i++) {
    if (inputForm[i].value == '') {
      setErro(i);
    }
  }
});

// Função dizendo que aquele campo do formulario esta ERRADO
function setErro(index) {
  inputForm[index].style.border = '2px solid red';
}
// Função dizendo que aquele campo do formulario esta CERTO
function setCheck(index) {
  inputForm[index].style.border = '2px solid #3ccc87';
}

function validateName() {
  if (inputForm[0].value.length > 2) {
    setCheck(0);
  } else {
    setErro(0);
  }
}

function validateEmail() {
  if (emailRegex.test(inputForm[1].value)) {
    setCheck(1);
  } else {
    setErro(1);
  }
}

function validateMensagem() {
  if (inputForm[2].value.length > 10) {
    setCheck(2);
  } else {
    setErro(2);
  }
}
