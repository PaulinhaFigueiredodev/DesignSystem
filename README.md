# Design System Cats — Guia Geral 🐱

Este documento explica **toda a estrutura do projeto**, **como criar componentes**, **como utilizá-los**, **como visualizá-los no playground** e **como rodar o projeto localmente**.  
Ele foi escrito para que qualquer pessoa do time consiga **copiar, colar e rodar** sem conhecimento prévio do projeto.

---

## 📁 Estrutura do Projeto

```text
DESIGNSYSTEM/
├── components/
│   └── button/
│       └── fab-button/
│           ├── fab-button.js
│           ├── fab-button.css
│           └── index.html
│
├── docs/
│   └── button/
│       └── fab-button.md
│
├── playground/
│   ├── index.html
│   └── playground.css
│
├── package.json
├── web-test-runner.config.js
└── README.md
````

Cada pasta possui uma **responsabilidade clara** e **não se sobrepõe às outras**.

---

## 📦 `components/` — Componentes do Design System

Esta pasta contém o **código-fonte dos componentes reutilizáveis**.

### Organização

* Componentes são agrupados por **domínio** (`button`, `input`, etc.)
* Cada componente vive em sua própria pasta
* CSS e JS são separados
* Componentes **não conhecem** o playground nem a documentação

### Exemplo: `fab-button`

```text
components/button/fab-button/
├── fab-button.js   → lógica e renderização
├── fab-button.css  → estilos encapsulados
└── index.html      → teste isolado do componente
```

---

## 🧩 Criando um novo componente

1. Crie a pasta do componente:

```text
components/button/meu-botao/
```

2. Crie os arquivos base:

```text
meu-botao.js
meu-botao.css
index.html
```

3. O componente deve:

* Estender `LitElement`
* Usar Shadow DOM
* Não definir layout global (`position`, `top`, etc.)

---

## 🧠 `docs/` — Documentação Técnica

A documentação é **centralizada**, separada do código.

```text
docs/button/fab-button.md
```

Cada arquivo deve explicar:

* O que o componente faz
* O que a versão inclui / não inclui
* Decisões técnicas
* Estratégia de evolução

---

## 🎮 `playground/` — Visualização dos Componentes

O playground é um **portal visual** para testar e exibir os componentes.

```text
playground/
├── index.html
└── playground.css
```

### Importante

* O playground **pode controlar layout**
* O componente **não controla layout**
* O CSS do playground **não afeta o Design System**

O playground funciona como:

* Storybook simplificado
* Área de testes visuais
* Ambiente de validação manual

---

## 🧩 Usando um componente no playground

No `playground/index.html`:

```html
<script type="module" src="../components/button/fab-button/fab-button.js"></script>

<section class="stage">
  <fab-button></fab-button>
</section>
```

---

## ▶️ Rodando o projeto localmente (Python)

Como o projeto usa **ES Modules**, é necessário um servidor HTTP.

### 1️⃣ Acesse a raiz do projeto

```bash
cd DESIGNSYSTEM
```

### 2️⃣ Suba o servidor

```bash
python3 -m http.server 8000
```

### 3️⃣ Acesse no navegador

```text
http://localhost:8000/playground/index.html
```

---

## ▶️ Rodando pelo `package.json`

Se você tiver Node.js instalado:

### Instalar dependências

```bash
npm install
```

### Subir o servidor

```bash
npm run serve
```

Depois acesse:

```text
http://localhost:8000/playground/index.html
```

---

## 🧪 Testes (visão geral)

Os testes vivem **junto do componente**:

```text
components/button/fab-button/__tests__/
```

Eles cobrem:

* Renderização
* Estrutura
* Acessibilidade
* Comportamento

Rodar testes:

```bash
npm test
```

---

## 🎨 Separação de Responsabilidades

| Camada      | Responsabilidade      |
| ----------- | --------------------- |
| components/ | Código do componente  |
| docs/       | Documentação técnica  |
| playground  | Visualização e layout |
| tests       | Garantia de qualidade |

---

## 🐾 Boas Práticas do Projeto

* Componentes devem ser simples na V1
* Evoluções devem ser incrementais
* Layout pertence ao consumidor
* Testes garantem estabilidade
* Documentação acompanha o código

---

Feito com organização, cuidado e muitos gatinhos 🐱✨

```
```