# 📑 Aula 08: Formulários no HTML5

Os formulários permitem que o usuário realize tarefas em vez de apenas consumir informação (como fazer compras, cadastros ou publicar algo). Um formulário sempre possui duas partes: o Frontend (marcação HTML que coleta os dados) e o Backend [script/aplicação que processa a informação no servidor].

## 🏗️ Estrutura Base

* **`<form>`**: É o contêiner obrigatório para todo o conteúdo do formulário.
* **`action="..."`**: Indica a URL do script ou servidor que vai receber e processar os dados.
* **`method="..."`**: Define como os dados serão enviados (geralmente `GET` ou `POST`).

## ✍️ Tipos de Entrada (`<input>`)

A tag `<input>` muda completamente de comportamento dependendo do atributo `type`:

* **Textos**: `text` (linha única), `email`, `search`, `tel` (telefone), `url`, `password` [senha oculta]. Para textos longos, usamos a tag `<textarea>` em vez de `<input>`.
* **Seleção**: `radio` (apenas uma opção pode ser escolhida) e `checkbox` [várias opções podem ser escolhidas]. Para menus suspensos, usamos as tags `<select>` e `<option>`.
* **Arquivos**: `file`. (Exige o atributo `enctype="multipart/form-data"` na tag `<form>` para funcionar). Pode usar o atributo `accept` para limitar formatos (ex: `.pdf`).
* **Tempo**: `date` (calendário), `time` (hora), `datetime-local`, `month`, `week`.
* **Numéricos**: `number` (campo numérico tradicional) e `range` (barra deslizante). Podem usar limites como `min`, `max` e `step` [incremento].
* **Cores**: `color` [abre o seletor de cores do sistema].
* **Botões**: `submit` (envia os dados) e `reset` [limpa o formulário].

## ⚙️ Atributos Principais

* **`name`**: Obrigatório! É o nome da variável que o Backend vai ler para identificar aquele dado.
* **`value`**: O valor padrão daquele campo.
* **`placeholder`**: Um texto de dica (marca d'água) sobre o que digitar.
* **`required`**: Torna o preenchimento do campo obrigatório antes do envio.
* **`readonly` e `disabled`**: Bloqueiam a digitação, mas `readonly` envia o dado pro servidor, enquanto `disabled` ignora o campo.
