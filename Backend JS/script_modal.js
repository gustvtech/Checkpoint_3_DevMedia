// Seleciona o elemento do modal da galeria
const modal = document.getElementById('modal-galeria');

// Seleciona a imagem que será exibida dentro do modal
const modalImg = document.getElementById("img-modal");

// Seleciona todas as imagens da galeria que podem ser clicadas
const imagens = document.querySelectorAll('.foto-galeria');

// Seleciona o botão de fechar o modal
const fecharModal = document.querySelector('.fechar-modal');

// Seleciona os botões de navegação para próxima e anterior imagem
const btnProximo = document.querySelector('.btn-proximo');
const btnAnterior = document.querySelector('.btn-anterior');

// Armazena o índice atual da imagem exibida no modal
let indexAtual = 0;

// Lista que armazenará os caminhos (src) de todas as imagens da galeria
let listaImagens = [];

// Adiciona os caminhos das imagens na lista e configura o evento de clique
imagens.forEach((img, index) => {
    listaImagens.push(img.src); // Armazena o caminho da imagem
    img.addEventListener('click', () => {
        indexAtual = index; // Atualiza o índice atual com base na imagem clicada
        abrirModal(indexAtual); // Abre o modal com a imagem correspondente
    });
});

// Exibe o modal e define a imagem a ser mostrada com base no índice fornecido
function abrirModal(index) {
    modal.style.display = "block";
    modalImg.src = listaImagens[index];
}

// Fecha o modal, ocultando-o da tela
function fechar() {
    modal.style.display = "none";
}

// Avança para a próxima imagem na lista, com loop para o início
function proximaImagem() {
    indexAtual = (indexAtual + 1) % listaImagens.length; // Incrementa e volta ao início se passar do fim
    modalImg.src = listaImagens[indexAtual]; // Atualiza a imagem no modal
}

// Volta para a imagem anterior na lista, com loop para o final
function imagemAnterior() {
    indexAtual = (indexAtual - 1 + listaImagens.length) % listaImagens.length; // Decrementa e volta ao final se necessário
    modalImg.src = listaImagens[indexAtual]; // Atualiza a imagem no modal
}

// Adiciona os eventos de clique para os botões e para fechar o modal
fecharModal.addEventListener('click', fechar);
btnProximo.addEventListener('click', proximaImagem);
btnAnterior.addEventListener('click', imagemAnterior);

// Fecha o modal se o clique for fora da imagem, diretamente sobre o fundo do modal
window.addEventListener('click', (e) => {
    if (e.target === modal) fechar();
});
