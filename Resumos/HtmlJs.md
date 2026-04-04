# Como conectar um arquivo JavaScript externo (Exemplo do Range)

Para manter o projeto organizado, o ideal é separar a estrutura (HTML) do comportamento (JavaScript). Com base na nossa estrutura de pastas, temos:

* **O HTML em:** `aula08/index08.html`
* **O JavaScript em:** `src/aula08/app/App.js`

## Passo 1: Limpar o HTML e conectar o arquivo `.js`

No seu arquivo `index08.html`, você vai deixar a barra deslizante e o visor "limpos" (sem JavaScript misturado), garantindo que ambos tenham um `id`.

Depois, no final do documento (antes de fechar a tag `</body>`), você cria o link chamando o seu arquivo `App.js`. O caminho precisa voltar uma pasta (`../`) para sair de `aula08` e entrar em `src`.

**No seu `index08.html`:**

```html
<div>
    <label for="salario">Pretensão Salarial Mínima: R$ <output id="visorSalario">3000</output></label>
    <input type="range" name="salario" id="salario" min="1500" max="15000" step="500" value="3000">
</div>

<!-- ... resto do seu formulário ... -->

<!-- Coloque isso logo antes do fechamento do </body> -->
<script src="../src/aula08/app/App.js"></script>
```

### Passo 2: Escrever a Lógica no JavaScript

Agora, você abre o seu arquivo `App.js`. Lá dentro, nós vamos mandar o JavaScript "procurar" a barra e o visor no HTML, e depois mandar ele "escutar" toda vez que a barra for movida.

**No seu `App.js`:**

```javascript
// 1. Buscamos os elementos no HTML pelos seus IDs
const inputSalario = document.getElementById('salario');
const visorSalario = document.getElementById('visorSalario');

// 2. Criamos um "ouvinte de eventos" (EventListener)
// Ele fica prestando atenção no evento de 'input' (quando o usuário arrasta a barra)
inputSalario.addEventListener('input', function() {
    // Quando a barra se move, pegamos o valor atual dela e injetamos como texto no visor
    visorSalario.textContent = inputSalario.value;
});
```

### 💡 Por que isso é melhor?

Fazer dessa forma deixa o seu código HTML muito mais limpo e fácil de ler. Além disso, se amanhã você quiser adicionar regras mais complexas (como formatar o número com "R$ 3.000,00" ou mudar a cor da barra dependendo do valor), você faz tudo isso no `App.js` sem bagunçar a sua estrutura de tags!
