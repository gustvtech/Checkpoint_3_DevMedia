// Garante que o script será executado apenas após o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona o botão do menu hamburguer
    const btnHamburguer = document.querySelector('.hamburguer');

    // Seleciona o menu que será exibido ou ocultado
    const menu = document.querySelector('.menu');

    // Verifica se os elementos existem antes de adicionar os eventos
    if (btnHamburguer && menu) {

        // Adiciona um evento de clique ao botão hamburguer para alternar a visibilidade do menu
        btnHamburguer.addEventListener('click', () => {
            menu.classList.toggle('ativo'); // Adiciona ou remove a classe 'ativo' que controla a exibição do menu
        });

        // Adiciona um evento de clique para cada link dentro do menu
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('ativo'); // Fecha o menu ao clicar em qualquer link
            });
        });
    }
});
