# Fab Button – Documentação versão inicial

## Visão Geral

A **primeira versão do `<fab-button>`** representa a versão mais básica e estável do componente Floating Action Button dentro do design system. Ela foi criada como um **baseline**, servindo de fundação para evoluções incrementais futuras, sem acoplamento de comportamentos ou animações.

O foco desta versão é **estrutura, estilo e organização**, garantindo fácil manutenção e evolução.

---

## Objetivos da Primeira Versão

* Criar um **FAB apenas visual**, sem lógica de negócio
* Garantir **separação clara de responsabilidades** (CSS x JS)
* Utilizar **Web Components com Lit**
* Aplicar **design tokens via CSS variables**
* Estabelecer uma base sólida para evoluções futuras

---

## Tecnologias Utilizadas

### Web Components

* Custom Elements
* Shadow DOM
* Encapsulamento de estilo e estrutura

### Lit

* Renderização declarativa com `html`
* Ciclo de vida simplificado
* Código previsível e enxuto

### CSS externo + adoptedStyleSheets

* Estilos desacoplados da lógica
* Organização orientada a Design System
* Suporte a temas e tokens

---

## Estrutura de Pastas

```text
components/
├── button/
│   ├── fab-button/
│   │   ├── fab-button.css
│   │   └── fab-button.js


docs/
├── button/
│   └── fab-button.md
```

A documentação é mantida **centralizada na pasta `docs/`**, separada do código-fonte, permitindo a criação de um **site de documentação**, integração com ferramentas como Storybook ou Docusaurus e uma visão unificada do Design System.

---

## Estrutura da Documentação

A documentação do componente segue uma organização centralizada, mantendo consistência entre todos os componentes do Design System.

### Localização

Os arquivos de documentação ficam em:

```text
docs/
├── button/
│   └── fab-button.md
```

Essa abordagem garante:

* Visão centralizada de todos os componentes
* Facilidade para geração de documentação automática
* Separação clara entre código e documentação

### Convenção de Nome

```text
fab-button.md
fab-button.md
```

Cada arquivo representa uma **versão funcional do componente**, documentando mudanças de comportamento, estrutura ou API.

### Estrutura do Arquivo `.md`

Cada documentação deve conter, no mínimo:

1. **Visão Geral**
   Descrição e propósito da versão

2. **Objetivos da Versão**
   O que esta versão resolve

3. **Tecnologias Utilizadas**
   Stack e decisões técnicas

4. **Estrutura de Pastas**
   Organização entre `components/` e `docs/`

5. **O que Inclui / Não Inclui**
   Escopo claro da versão

6. **Design Tokens**
   Tokens disponíveis e uso

7. **Uso Básico**
   Exemplo mínimo de consumo

8. **Estratégia de Evolução**
   Próximos passos planejados

Essa padronização garante consistência entre componentes e facilita a adoção do Design System.

---

## Estrutura da Documentação

A documentação do componente segue o mesmo princípio de simplicidade e evolução incremental adotado no código.

### Localização

A documentação fica **dentro da pasta do componente**, garantindo:

* Proximidade entre código e documentação
* Evolução sincronizada
* Facilidade de descoberta

### Convenção de Nome

```text
fab-button.md
fab-button.md
```

Cada arquivo representa uma **versão funcional do componente**, não apenas mudanças cosméticas.

### Estrutura do Arquivo `.md`

Cada documentação deve conter, no mínimo:

1. **Visão Geral**
   Propósito da versão

2. **Objetivos da Versão**
   O que a versão resolve

3. **Tecnologias Utilizadas**
   Stack e decisões técnicas

4. **Estrutura de Pastas**
   Organização do componente

5. **O que Inclui / Não Inclui**
   Escopo claro da versão

6. **Design Tokens**
   Tokens disponíveis e uso

7. **Uso Básico**
   Exemplo mínimo de consumo

8. **Estratégia de Evolução**
   Próximos passos planejados

Essa padronização garante consistência entre componentes e facilita a adoção do Design System.

---

## O que a versão inicial Inclui

### Estilo

* FAB circular (56x56)
* Cor primária via token
* Sombra simples
* Posicionamento fixo (canto inferior direito)

### Estrutura

* Elemento `<button>` interno
* Ícone estático (`+`)
* Shadow DOM ativo

---

## O que a versão inicial NÃO Inclui (intencionalmente)

* Eventos de clique
* Estados (`hover`, `active`, `focus`)
* Animações
* Ripple effect
* Slots
* Variantes de cor
* FAB menu ou subações

Essas exclusões evitam acoplamento precoce e facilitam evolução controlada.

---

## Design Tokens

Tokens definidos no `:host`:

```css
--fab-bg
--fab-color
--fab-shadow
```

Permitem sobrescrita externa e integração com temas.

---

## Uso Básico

```html
<script type="module" src="/components/buttons/fab-button/fab-button.js"></script>

<fab-button></fab-button>
```

Nenhuma configuração adicional é necessária na versão inicial.

---

## Estratégia de Evolução

Evolução planejada de forma incremental:

* **V2 – Acessibilidade**
  `:focus-visible`, navegação por teclado

* **V3 – Comportamento**
  Evento de clique (`fab-click`)

* **V4 – Customização**
  Slot para ícone, atributos (`variant`, `size`)

* **V5 – Interação**
  Ripple effect, animações

* **V6 – Composição**
  FAB Menu, subações, motion tokens

---

## Conclusão

A primeira versão do `<fab-button>` não busca ser completa, mas sim **correta, simples e sustentável**. Ela estabelece uma base sólida para um componente robusto, alinhado a boas práticas de Web Components e Design Systems.

