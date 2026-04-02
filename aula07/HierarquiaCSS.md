# **Hierarquia de Seletores do CSS**

Pense no HTML como uma árvore genealógica. O CSS precisa saber exatamente quem você quer chamar para aplicar o estilo.

## 1. Quando NÃO usar nada (`h1`, `th`, `td`, `body`)

Você não usa nenhum símbolo quando quer estilizar a **tag original (o elemento nativo do HTML)**.

* **O que o CSS entende:** *"Pinte TODOS os elementos `th` que existirem nesta página inteira, não importa onde estejam."*
* **Quando usar:** Para regras globais. Quando você quer que *toda* tabela do seu site tenha o mesmo estilo de borda, ou que *todo* `<h1>` tenha a mesma fonte.

## 2. Quando usar o Ponto (`.carreira-estilo`, `.impar`)

O ponto `.` significa **Classe (Class)**. É o apelido que você inventou e colocou lá no HTML (`class="nome"`).

* **O que o CSS entende:** *"Procure especificamente o grupo de elementos que recebeu o crachá de `.carreira-estilo`."*
* **Quando usar:** Sempre que você quiser estilizar um bloco específico sem afetar o resto do site. É a forma mais segura e usada por profissionais.

---

### O Grande Mistério: O Espaço vs O Sinal de Maior (`>`)

Isso aqui explica exatamente o "bug" que você teve ao tentar usar `.carreira-estilo h2`. Ambos servem para buscar elementos que estão *dentro* de outros, mas com uma diferença brutal:

#### O Espaço (O "Descendente" ou "Qualquer Geração")

Se você escreve `.carreira-estilo h2` (com espaço):

* **O que o CSS entende:** *"Pegue a caixa `.carreira-estilo` e pinte TODOS os `h2` que estiverem lá dentro. Não importa se o `h2` é filho, neto, bisneto ou se está escondido dentro de três `<article>` e quatro `<div>`. Se estiver lá dentro, pinte!"*
* **Por que deu erro pra você:** Se você tinha outros `h2` perdidos lá dentro da seção de carreira (talvez nos textos), o CSS atropelou tudo e pintou todos eles igual ao título principal.

#### O Sinal de Maior `>` (O "Filho Direto" ou "Primeira Geração")

Se você escreve `.carreira-estilo > h2` (com o `>`):

* **O que o CSS entende:** *"Pegue APENAS o `h2` que for **filho direto** da caixa `.carreira-estilo`."*
* **Por que funcionou:** Ele olhou para a sua `<section class="carreira-estilo">` e estilizou apenas o `h2` que estava colado nela. Se houvesse outro `h2` escondido mais para dentro (dentro do `div.container-flex`, por exemplo), o CSS iria ignorar, porque esse outro `h2` seria "neto", e o `>` só atinge "filhos".

### Resumo de Ouro para salvar no seu `.md`

* `p` 👉 Estiliza TODOS os parágrafos do site.
* `.caixa` 👉 Estiliza todos os elementos que tenham `class="caixa"`.
* `#topo` 👉 Estiliza o ÚNICO elemento que tenha `id="topo"`.
* `.caixa p` (Espaço) 👉 Estiliza **qualquer** `p` que viva em qualquer lugar dentro da `.caixa`.
* `.caixa > p` (Sinal `>`) 👉 Estiliza **apenas** o `p` que for filho direto da `.caixa`.
