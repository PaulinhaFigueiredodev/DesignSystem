
# `<fab-button>` — Documentação (V1)

## Visão Geral

O `<fab-button>` é um **Floating Action Button básico**, implementado como **Web Component com Lit**.  
Esta é a **versão inicial (V1)**, focada exclusivamente na **apresentação visual**, servindo como base para evoluções futuras do Design System Cats.

O componente **não possui ações, eventos ou estados interativos** nesta versão.

---

## Objetivos da V1

- Criar um componente visual simples e reutilizável
- Utilizar Web Components com Shadow DOM
- Manter o JavaScript enxuto e previsível
- Permitir que o layout seja controlado externamente (ex: Playground)

---

## Tecnologias Utilizadas

- **Web Components**
  - Custom Elements
  - Shadow DOM
- **Lit**
  - `LitElement`
  - Templates com `html`

---

## Estrutura de Pastas

```text
components/
└── button/
    └── fab-button/
        ├── fab-button.js
        └── fab-button.css

docs/
└── button/
    └── fab-button.md

playground/
├── index.html
└── playground.css
````

* `components/` contém o código do componente
* `docs/` centraliza a documentação
* `playground/` é usado apenas para visualização e testes manuais

---

## Implementação do Componente

### `fab-button.js`

Define o Custom Element `<fab-button>` e renderiza apenas o botão base.

```js
import { LitElement, html, css } from 'https://unpkg.com/lit@3?module';

class FabButton extends LitElement {
  static styles = css`
    @import './fab-button.css';
  `;

  render() {
    return html`
      <button aria-label="Ação principal">
        PF
      </button>
    `;
  }
}

customElements.define('fab-button', FabButton);
```

---

### `fab-button.css`

Responsável apenas pela aparência visual do botão.

```css
:host {
  --fab-bg: #6751A1;
  --fab-color: #FFFFFF;
  --fab-shadow: 0 6px 16px rgba(0,0,0,.2);

  display: inline-block;
}

button {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;

  background: var(--fab-bg);
  color: var(--fab-color);
  box-shadow: var(--fab-shadow);

  display: grid;
  place-items: center;

  font-size: 18px;
  cursor: pointer;
}
```

---

## Uso Básico

```html
<fab-button></fab-button>
```

Nenhuma configuração adicional é necessária na V1.

---

## Integração com o Playground

O posicionamento do componente **não é responsabilidade do FAB**, mas sim do container externo.

Exemplo usado no playground:

```css
.stage {
  display: grid;
  place-items: center;
}
```

Isso permite que o `<fab-button>` seja renderizado no centro da área de visualização.

---

## O que a V1 Inclui

* Estrutura visual do FAB
* Shadow DOM
* Tokens de cor via CSS variables
* Código simples e previsível

---

## O que a V1 NÃO Inclui (intencional)

* Eventos de clique
* Estados (`hover`, `active`, `focus`)
* Animações
* Slots
* Variações de tamanho ou cor
* Posicionamento fixo (`position: fixed`)

---

## Evoluções Futuras Planejadas

* **V2**: Acessibilidade (teclado, `focus-visible`)
* **V3**: Evento customizado de clique
* **V4**: Slots e atributos
* **V5**: Animações e feedback visual
* **V6**: FAB Menu com ações secundárias

---

## Conclusão

A V1 do `<fab-button>` estabelece uma base sólida, simples e extensível para o Design System Cats, priorizando clareza, manutenção e evolução incremental.
