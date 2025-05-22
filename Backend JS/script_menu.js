document.addEventListener("DOMContentLoaded", function () {
    const btnHamburguer = document.querySelector('.hamburguer');
    const menu = document.querySelector('.menu');

    if (btnHamburguer && menu) {
        btnHamburguer.addEventListener('click', () => {
            menu.classList.toggle('ativo');
        });

        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('ativo');
            });
        });
    }
});