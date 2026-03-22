# 📑 Aula 05: HTML Semântico e Modelos de Renderização

Esta aula foca em como o navegador interpreta a estrutura do código e a importância de usar as tags corretas para cada conteúdo.

---

## 🏗️ 1. Renderização em Bloco (Block)

Elementos em bloco sempre começam em uma **nova linha** e ocupam toda a largura disponível do elemento pai.

* **`<h1>` a `<h6>`**: Títulos hierárquicos do documento.
* **`<p>`**: Define parágrafos de texto comum.
* **`<hr>`**: Insere uma linha horizontal para indicar uma quebra temática no conteúdo.
* **`<ul>` e `<ol>`**: Definem listas não ordenadas e ordenadas, respectivamente.
* **`<li>`**: Define cada item dentro de qualquer tipo de lista.
* **`<dl>`, `<dt>`, `<dd>`**: Estrutura de lista de descrição para pares de nome/valor.
* **`<div>`**: Contêiner em bloco genérico.

---

## 📏 2. Renderização em Linha (Inline)

Elementos em linha ocupam apenas a **largura necessária** para o seu conteúdo e não forçam uma nova linha.

* **`<em>`**: Enfatiza uma parte da frase.
* **`<strong>`**: Indica que o texto é importante, sério ou urgente.
* **`<code>`**: Utilizado para exibir trechos de código de programação.
* **`<sub>` e `<sup>`**: Inserem texto subscrito (abaixo da linha) e sobrescrito (acima da linha).
* **`<br>`**: Força uma quebra de linha simples.
* **`<span>`**: Contêiner em linha genérico para aplicar estilos em partes de um texto.

---

## 🧠 3. Elementos Semânticos (HTML5)

Um elemento semântico descreve claramente seu significado tanto para o **navegador** quanto para o **desenvolvedor**.

| Elemento | Função Principal |
| :--- | :--- |
| **`<header>`** | Conteúdo introdutório, logos ou conjunto de links de navegação. |
| **`<nav>`** | Define um bloco principal de links de navegação. |
| **`<section>`** | Agrupamento temático de conteúdo, geralmente com um título. |
| **`<article>`** | Conteúdo independente e autocontido. |
| **`<aside>`** | Conteúdo relacionado ao redor, como barras laterais. |
| **`<footer>`** | Rodapé para o documento ou para uma seção específica. |

---

## ✍️ Exercícios da Aula

Para praticar, o objetivo é criar um documento HTML completo **sem utilizar `<div>`**:

1. **Estrutura Completa**: O documento deve obrigatoriamente conter as tags raiz: `<!DOCTYPE html>`, `<html>`, `<head>` (para metas e títulos) e `<body>` (para o conteúdo visível).

2. **Identificação Semântica**: No lugar de usar uma `<div>` para o seu nome, use uma tag que indique "seção" ou "artigo" (como `<section>` ou `<article>`) Dentro dela, coloque um `<h1>` com seu nome e um `<p>` sobre sua carreira futura.

3. **Listas Ordenadas e Não Ordenadas**:

   * **Ordenada (`<ol>`)**: Use para suas habilidades atuais, onde o número indica a ordem de importância (ex: 1. Java, 2. Git).
   * **Não Ordenada (`<ul>`)**: Use para habilidades que quer adquirir, pois não há uma ordem rígida de aprendizado ainda.

4. **Lista de Descrição (`<dl>`)**: Use as tags `<dl>` (lista), `<dt>` (termo: a disciplina) e `<dd>` (descrição: o nome do professor) para listar o que você está cursando no semestre.

5. **Proibição de `<div>`**: O objetivo deste exercício é forçar você a usar as novas tags do HTML5. Para cada "caixa" que você pensaria em usar uma `div`, tente encaixar um `<header>`, `<main>`, `<section>`, `<article>` ou `<footer>`.

---
