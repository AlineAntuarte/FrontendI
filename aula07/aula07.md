# 📊 Aula 07: Validação, Tabelas Avançadas e Mídia Incorporada

Nesta aula, aprendemos a garantir que nosso código segue os padrões mundiais (W3C), a criar tabelas complexas com mesclagem de células e a incorporar mídias externas.

## 1. Validação W3C

Escrever código que "funciona" é diferente de escrever código **válido**. O W3C (World Wide Web Consortium) dita as regras do HTML.

* Um documento sem erros carrega mais rápido, tem melhor SEO (Google) e é mais acessível para leitores de tela.
* **Como testar:** Usa-se o site [validator.w3.org](https://validator.w3.org/) para colar o código HTML e caçar erros (como tags abertas que esquecemos de fechar).

## 2. Tabelas Avançadas (`rowspan` e `colspan`)

Até agora, criamos tabelas simples (linha por linha). Mas e se uma aula durar dois horários ou um título precisar cobrir 5 colunas?

* **`colspan="X"`**: Expande uma célula horizontalmente (mescla **colunas**). *Ex: Um título que cobre todos os dias da semana.*
* **`rowspan="X"`**: Expande uma célula verticalmente (mescla **linhas**). *Ex: Uma aula que vai das 18h30 até as 20h20.*

## 3. Mídia Incorporada (Iframes, Áudio e Vídeo)

O HTML5 trouxe tags nativas para mídias, eliminando a necessidade de plugins antigos (como o Flash Player).

* **`<iframe>`**: Uma "janela" dentro do seu site que carrega outra página. Muito usado para mapas do Google Maps ou vídeos do YouTube.
* **`<audio>`**: Insere som. Principais atributos:
  * `src`: Caminho do arquivo (ex: `.mp3`).
  * `controls`: Mostra o play/pause e volume.
  * `autoplay`: Toca sozinho (alguns navegadores bloqueiam).
  * `loop`: Repete a música infinitamente.
* **`<video>`**: Funciona igual ao áudio, mas exige atributos visuais (`width`, `height`) e um `poster` (a imagem de capa antes de dar o play).

---

## ✍️ Guia para os Exercícios Práticos

O Prof. Ramon passou 4 missões. O grande desafio aqui é usar o `rowspan` e `colspan` corretamente. Vamos detalhar como construir:

### Exercício 1: A Estrutura Básica

Crie o arquivo `index07.html`. A regra é simples: o `<title>` no `<head>` tem que ser o seu nome:

```html
<title>Aline Barbosa Antuarte</title>
```

### Exercício 2: A Tabela da Grade Horária (O Desafio do CSV)

Analisando o arquivo CSV que você enviou, notamos duas coisas:

1. O título "DIAS DA SEMANA" ocupa o topo de Segunda a Sexta. Usaremos **`colspan="5"`**.
2. Cada matéria sua (ex: Probabilidade e Estatística - EST786202) dura **dois horários seguidos** (ex: 18:30 até 20:20). Em vez de escrever a matéria duas vezes no código, você escreve na primeira linha e usa **`rowspan="2"`**. A linha de baixo vai ter apenas o horário, pois a célula da matéria "desceu" e ocupou o espaço!

**Esqueleto da sua tabela:**

```html
<table>
    <thead>
        <tr>
            <th>HORÁRIO</th>
            <th colspan="5">DIAS DA SEMANA</th> </tr>
        <tr>
            <th></th> <th>SEGUNDA</th>
            <th>TERÇA</th>
            <th>QUARTA</th>
            <th>QUINTA</th>
            <th>SEXTA</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>18:30 - 19:25</td>
            <td rowspan="2">Probabilidade e Estatística</td> <td rowspan="2">Redes de Computadores</td>
            <td rowspan="2">Probabilidade e Estatística</td>
            <td rowspan="2">Frontend I</td>
            <td rowspan="2">Atividades de Extensão I</td>
        </tr>
        <tr>
            <td>19:25 - 20:20</td>
            </tr>
        </tbody>
</table>
```

### Exercício 3: Tabela de Viagens de Ônibus

A regra pede horários saindo da cidade onde você nasceu para 5 outras cidades, com detalhes super específicos.
Como o ponto de partida é o Rio de Janeiro, seus 5 destinos podem ser:

1. Cabo Frio (RJ)
2. Petrópolis (RJ)
3. Búzios (RJ)
4. São Paulo (SP) - *Estado diferente, regra cumprida!*
5. Florianópolis (SC) - *Estado diferente, regra cumprida!*

Nesta tabela, como ele pede **pelo menos 2 horários para cada linha**, você usará o `rowspan="2"` na empresa, destino, tarifa e classe, deixando apenas os horários variarem nas linhas seguintes, criando uma tabela de viagens profissional.

### Exercício 4: O Áudio em Loop

Você precisa baixar um arquivo de música em `.mp3` curto, colocar na sua pasta de mídia e inserir no HTML com os comandos que entretenham quem lê:

```html
<audio src="midia/musica_fundo.mp3" controls loop autoplay></audio>
```

---
