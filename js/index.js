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
