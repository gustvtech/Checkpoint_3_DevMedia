document.getElementById('form-agendamento').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const arte = document.getElementById('arte').value;

    const numeroWhatsApp = '5521999223042'; 

    const mensagem = `Hello! Gostaria de encomendar uma pixelart, segue abaixo minhas informações:\n\n` +
                     `Nome: ${nome}\n Telefone: ${telefone}\n Tipo de Arte: ${arte}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
});