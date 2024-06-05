// Simulação de tempo de entrega
const deliveryTime = 30; // minutos

// Atualizar status do pedido
const statusElement = document.getElementById('status');
statusElement.textContent = 'Pedido Confirmado';

// Atualizar estimativa de entrega
const deliveryTimeElement = document.getElementById('delivery-time');
deliveryTimeElement.textContent = `${deliveryTime} minutos`;

// Evento de envio do formulário de personalização de café
const coffeeForm = document.getElementById('coffee-form');
coffeeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const coffeeType = document.getElementById('coffee-type').value;
    const sugarLevel = document.getElementById('sugar-level').value;
    const syrup = document.getElementById('syrup').checked;
    const coffeeStrength = document.getElementById('coffee-strength').value;
    
    // Simular envio do pedido
    alert(`Pedido enviado com sucesso!\nTipo: ${coffeeType}\nAçúcar: ${sugarLevel}\nXarope: ${syrup ? 'Sim' : 'Não'}\nIntensidade: ${coffeeStrength}`);
});

// Evento de avaliação da experiência
const rateBtn = document.getElementById('rate-btn');
rateBtn.addEventListener('click', function() {
    // Simular envio da avaliação
    alert('Obrigado por avaliar sua experiência conosco!');
});
