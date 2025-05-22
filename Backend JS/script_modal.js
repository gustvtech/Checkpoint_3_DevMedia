const modal = document.getElementById('modal-galeria');
const modalImg = document.getElementById("img-modal");
const imagens = document.querySelectorAll('.foto-galeria');
const fecharModal = document.querySelector('.fechar-modal');
const btnProximo = document.querySelector('.btn-proximo');
const btnAnterior = document.querySelector('.btn-anterior');

let indexAtual = 0;
let listaImagens = [];

imagens.forEach((img, index) => {
    listaImagens.push(img.src);
    img.addEventListener('click', () => {
        indexAtual = index;
        abrirModal(indexAtual);
    });
});

function abrirModal(index) {
    modal.style.display = "block";
    modalImg.src = listaImagens[index];
}

function fechar() {
    modal.style.display = "none";
}

function proximaImagem() {
    indexAtual = (indexAtual + 1) % listaImagens.length;
    modalImg.src = listaImagens[indexAtual];
}

function imagemAnterior() {
    indexAtual = (indexAtual - 1 + listaImagens.length) % listaImagens.length;
    modalImg.src = listaImagens[indexAtual];
}

fecharModal.addEventListener('click', fechar);
btnProximo.addEventListener('click', proximaImagem);
btnAnterior.addEventListener('click', imagemAnterior);

window.addEventListener('click', (e) => {
    if (e.target === modal) fechar();
});