# 📊 Analogia: HTML vs. Excel

* **`<table>` (O Arquivo/Planilha):** É o arquivo `.xlsx` inteiro. Sem ele, você não tem onde colocar os dados. Ele avisa ao navegador: "Tudo o que estiver aqui dentro faz parte de uma tabela".

![alt text](imagensAula03/Título.png)

* **`<tr>` (A Linha Numerada):** No Excel, são as linhas 1, 2, 3... Você não consegue escrever um dado no "vácuo"; você primeiro escolhe em qual **Linha** vai trabalhar.

![alt text](imagensAula03/Linhas.png)

* **`<td>` ou `<th>` (A Célula):** É o quadradinho individual (ex: A1, B1). É aqui que você digita o valor.

![alt text](imagensAula03/Células.png)

* **`<th>` (Table Header):** É como aquela célula que você coloca em **Negrito e Centralizado** para ser o título da coluna.

![alt text](imagensAula03/Negrito.png)

* **`<td>` (Table Data):** É a célula de dado comum, onde vai o conteúdo normal.

![alt text](imagensAula03/Comum.png)

---

## 📂 A Planilha Organizada (Modelo HTML5)

Imagine que agora sua planilha não é apenas um monte de células, mas um relatório oficial:

**`<thead>` (O Cabeçalho da Planilha):** No Excel, seriam as primeiras linhas que você congela no topo (geralmente onde ficam os nomes das colunas: "Segunda", "Terça"...).
**Regra:** Aqui dentro você só coloca os títulos (`<th>`).

**`<tbody>` (O Corpo dos Dados):** São todas as linhas de conteúdo real da sua planilha (onde você listou as matérias como "Redes", "POO"). É o "recheio" da tabela.
**Regra:** É onde fica o grosso das suas linhas (`<tr>`) e células de dados (`<td>`).

**`<tfoot>` (O Rodapé/Totalizador):** No Excel, é aquela última linha onde você faz um =SOMA() ou coloca uma observação final.
**Regra:** Fica no final de tudo para fechar o relatório.

---

## Exemplo Visual no Código

    ```html
    <table>
        <tr>
            <th>Dia</th>
            <th>Matéria</th>
        </tr>

        <tr>
            <td>Segunda</td>
            <td>Frontend I</td>
        </tr>

    </table> <br><br>
    <table>
        ...
    </table>

    ```

### Resumo da Hierarquia

> **Arquivo** (`table`) > **Linha** (`tr`) > **Célula** (`td`/`th`)

**Um erro comum que você cometeu antes:** Tentar colocar uma linha (`tr`) dentro de uma célula (`td`). No Excel, você nunca conseguiria colocar a "Linha 5" inteira dentro do quadradinho "A1", certo? No HTML é a mesma coisa!

## 📊 Listas

### 1. Lista Não-Ordenada (`<ul>`)

O `ul` vem de *Unordered List*. É aquela lista com "bolinhas" (bullets), onde a ordem dos itens não altera o sentido.

* **Tag Mãe:** `<ul>`
* **Tag do Item:** `<li>` (de *List Item*)

### 2. Lista Ordenada (`<ol>`)

O `ol` vem de *Ordered List*. É a lista numerada (1, 2, 3...), usada para passos de um processo ou rankings, onde a ordem importa.

* **Tag Mãe:** `<ol>`
* **Tag do Item:** `<li>`

![alt text](imagensAula03/Lista.png)

#### **Dica**

* `<ul>`, `<ol>` e `<li>` são elementos de **bloco**. Isso significa que cada item da lista automaticamente começa numa linha nova, ocupando a largura toda.
