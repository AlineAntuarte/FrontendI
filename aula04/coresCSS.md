# Como converter cores sólidas em cores com níveis de transparência?

O segredo está no **`rgba`**. O **"a"** vem de **Alpha**, que controla a opacidade (transparência) em uma escala de **0 a 1**.

* **0.3** é igual a **30%** de cor (70% transparente).
* **0.5** é igual a **50%** de cor.
* **1.0** é a cor sólida (100%).

---

## Como converter `aliceblue` para RGBA?

A cor `aliceblue` em código RGB puro é `(240, 248, 255)`. Para aplicar os 30% de transparência, o seu CSS deve ficar assim:

```css
/* Div dos Hobbies (Ímpar) - AliceBlue com 30% de transparência */
.impar {
    background-color: rgba(240, 248, 255, 0.3);
}
```

---

### Como descobrir o RGB de qualquer cor?

Como você está no VS Code aí no IFSC, não precisa de site externo nem de calculadora. O próprio editor faz isso para você:

1. **Passe o mouse** em cima do nome da cor no CSS (ex: em cima de `aliceblue`).
2. Vai aparecer um **seletor de cores (Color Picker)**.
3. Lá em cima, no título do seletor, clique para alternar entre **HEX**, **RGB** e **HSL**.
4. **A barra da direita** no seletor controla a transparência. Quando você arrasta ela, o VS Code muda o código automaticamente para `rgba`.

### Dica

Se quiser usar o código **Hexadecimal**, pode adicionar a transparência no final dele. O `aliceblue` sólido é `#F0F8FF`. Para 30% de transparência, adicionamos `4D` no final: `#F0F8FF4D`.

### O Padrão de Cálculo (A Regra de Três)

Para descobrir qual código hexadecimal colocar no final da cor, você faz o seguinte cálculo:

Porcentagem desejada \ 255 = \Valor Decimal (Arredonda)

Depois, você converte esse **Valor Decimal** para **Hexadecimal**.

---

### Exemplo para os 30%

1. **30% de 255:** 0,30 \ 255 = 76,5
2. **Arredondando:** 77
3. **Convertendo 77 para Hexa:** 77 \ 16 = 4 (resto 13).

* No mundo Hexa, 13 = D.
* Logo, o resultado é **4D**.

### Tabela Rápida para Colinhas

| Porcentagem | Decimal (aprox) | Hexadecimal (Final do código) |
| --- | --- | --- |
| **100% (Sólido)** | 255 | `FF` |
| **80%** | 204 | `CC` |
| **50%** | 127 | `7F` |
| **30%** | 77 | **`4D`** |
| **20%** | 51 | `33` |
| **0% (Invisível)** | 0 | `00` |

---
