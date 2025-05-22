// Adiciona um ouvinte de evento para o envio do formulário com o ID 'form-agendamento'
document.getElementById('form-agendamento').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

    // Obtém os valores inseridos nos campos do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const arte = document.getElementById('arte').value;

    // Número de telefone do WhatsApp com DDI (Brasil: 55) e DDD
    const numeroWhatsApp = '5521999223042';

    // Monta a mensagem que será enviada via WhatsApp
    const mensagem = `Hello! Gostaria de encomendar uma pixelart, segue abaixo minhas informações:\n\n` +
                     `Nome: ${nome}\n Telefone: ${telefone}\n Tipo de Arte: ${arte}`;

    // Cria a URL de redirecionamento para o WhatsApp com a mensagem codificada
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    // Abre o WhatsApp em uma nova aba com a mensagem preenchida
    window.open(url, '_blank');
});
