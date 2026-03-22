# 📊 Entendendo o Seletor de Tabela Zebra no CSS

Neste guia, vamos dissecar o funcionamento do seletor que cria o efeito de "listras de zebra" em tabelas, facilitando a leitura de dados, como a nossa **Grade Horária**.

## 🕵️ Anatomia do Seletor Composto

O comando que usamos no arquivo `style04.css` foi:
`tbody tr:nth-child(even) { ... }`

Cada parte desse comando funciona como um **filtro de endereço** para o navegador:

| Termo | Significado | Analogia (Excel) |
| :--- | :--- | :--- |
| **`tbody`** | **O Prédio** | É a "aba" da planilha onde estão os dados reais (ignorando o topo). |
| **`tr`** | **O Apartamento** | É a linha inteira (*Table Row*) que queremos pintar. |
| **`:`** | **O Filtro** | Avisa: "Não quero todas as linhas, apenas as que seguem uma regra especial". |
| **`nth-child`** | **O Contador** | É a função que conta as linhas: 1, 2, 3, 4... |
| **`(even)`** | **A Condição** | Define que o estilo só se aplica às linhas **PARES** (2, 4, 6...). |

---

## 🛠️ Por que usar `nth-child` em vez de Classes?

Diferente de pintar uma linha no Excel ou colocar uma `class="impar"` no HTML, o CSS faz o trabalho sujo de contagem para você.

1. **Automação:** Se você deletar a "Segunda", a "Terça" assume o lugar e a cor se ajusta sozinha.
2. **Código Limpo:** Você não precisa encher o seu HTML de classes repetitivas.
3. **Padrão:** Garante que todas as tabelas do seu site tenham a mesma identidade visual.

---

## 💡 Outras variações úteis

Se você quiser inverter as cores ou ser mais específico, pode trocar o que vai entre parênteses:

* **`nth-child(odd)`**: Pinta as linhas **ÍMPARES** (1, 3, 5...).
* **`nth-child(3)`**: Pinta especificamente apenas a **3ª linha**.
* **`nth-child(3n)`**: Pinta de **3 em 3** linhas (múltiplos de 3).

---

> **Nota de ADS:** O uso de seletores como o `nth-child` demonstra domínio de **Pseudo-classes**, um conceito fundamental para criar layouts dinâmicos e profissionais sem "sujar" o HTML com estilos manuais.

---
*Documentação criada para os estudos de Frontend I - IFSC.*
