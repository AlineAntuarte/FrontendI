// 1. Buscamos os elementos no HTML pelos seus IDs
const inputSalario = document.getElementById('salario');
const visorSalario = document.getElementById('visorSalario');

// 2. Criamos um "ouvinte de eventos" (EventListener)
// Ele fica prestando atenção no evento de 'input' (quando o usuário arrasta a barra)
inputSalario.addEventListener('input', function() {
    // Quando a barra se move, pegamos o valor atual dela e injetamos como texto no visor
    visorSalario.textContent = inputSalario.value;
});