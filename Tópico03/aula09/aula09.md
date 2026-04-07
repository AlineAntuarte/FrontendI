# 🎨 Tópico 03: CSS3, Cascata e Posicionamento

O CSS (Cascading Style Sheets) é o padrão para definir a apresentação visual de documentos HTML, reduzindo a repetição de código e garantindo a consistência do layout.

## 🌊 A Cascata e a Herança

O navegador decide qual estilo aplicar baseado no "efeito cascata", onde os estilos descem na árvore do HTML. Quando há conflitos, o navegador usa regras estritas:

1. **Prioridade:** Regras marcadas com `!important` vencem, seguidas pelos estilos do autor (desenvolvedor), estilos do usuário e, por último, o padrão do navegador.
2. **Especificidade:** Um seletor de ID (`#`) tem mais força que uma Classe (`.`), que tem mais força que um Elemento genérico (`p`, `h1`).
3. **Ordem da Regra:** Se duas regras tiverem o mesmo peso, a que foi escrita por último no arquivo CSS vence.

## 📏 Unidades de Medida e Fontes

Existem unidades absolutas (`px`, `cm`, `mm`) e unidades relativas que se adaptam à tela ou ao elemento pai (`em`, `rem`, `%`, `vw`, `vh`).
Podemos formatar a tipografia com propriedades como `font-family`, `font-size`, `font-weight` (peso/negrito), `font-style` (itálico), `color` e `line-height` [altura da linha]. As fontes se dividem em famílias genéricas: serifadas, sem serifa, monoespaçadas, cursivas e fantasia.

## 🎯 Seletores Avançados

Além de IDs e Classes, o CSS3 usa seletores de estado e conteúdo:

* **Pseudo-classes:** Selecionam elementos a partir de estados monitorados pelo navegador (ex: `:hover` para mouse por cima, `:focus` para elemento selecionado).
* **Pseudo-elementos:** Selecionam partes geradas pelo navegador (ex: `::first-letter`, `::before`, `::after`).

## 📦 Display e Posicionamento

* **Display:** Define o comportamento da caixa do elemento. Valores comuns incluem `inline` (não quebra linha), `block` (ocupa a linha inteira), `none` (esconde o elemento), e claro, `flex`.
* **Float:** Uma forma clássica de posicionamento que move o elemento para os lados (`left` ou `right`), permitindo que o texto flua ao redor dele [útil para imagens]. Para parar esse comportamento em elementos seguintes, usa-se a propriedade `clear`.

## 🧩 O Poder do Flexbox

O `display: flex` dá controle absoluto sobre a organização de itens em eixos. Suas principais propriedades são:

* **Eixos e Quebras:** `flex-direction` (linha ou coluna) e `flex-wrap` [se os itens podem cair para a linha de baixo].
* **Alinhamentos:** `justify-content` (alinhamento no eixo principal) e `align-items` [alinhamento no eixo cruzado].
