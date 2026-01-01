import type { Meta, StoryObj } from "@storybook/web-components";
import "../../../components/logos/brand";

const meta: Meta = {
  title: "Components/logos/Brand Logo",
  component: "brand-logo",
  tags: ["autodocs"] /** cria documentacao automatica no storybook */,
  parameters: {
    docs: {
      description: {
        component:
          "Logo institucional com suporte a SVG inline ou imagem via atributo.",
      },
    },
  },
  argTypes: {
    href: { control: "text" },
    src: { control: "text" },
    alt: { control: "text" },
  },
};

export default meta;

type Story = StoryObj;

export const ComImagem: Story = {
  args: {
    href: "/",
    src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=64&q=80",
    alt: "Gato"
  }
};


export const ComSVGInline: Story = {
  render: () => `

<brand-logo>
  <svg
    width="48"
    height="48"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <!-- Fundo -->
    <circle cx="32" cy="32" r="32" fill="#ce4f67" />

    <!-- Orelhas externas -->
    <path d="M18 20 L14 10 L24 14 Z" fill="#963749" />
    <path d="M46 20 L50 10 L40 14 Z" fill="#963749" />

    <!-- Orelhas internas -->
    <path d="M18.5 19 L16.5 13 L22 15.5 Z" fill="#eabbc1" />
    <path d="M45.5 19 L47.5 13 L42 15.5 Z" fill="#eabbc1" />

    <!-- Cabeça -->
    <circle cx="32" cy="34" r="18" fill="#f9ecee" />

    <!-- Olhos -->
    <circle cx="26" cy="32" r="2.5" fill="#310d13" />
    <circle cx="38" cy="32" r="2.5" fill="#310d13" />

    <!-- Brilho dos olhos -->
    <circle cx="27" cy="31" r="0.8" fill="#ffffff" />
    <circle cx="39" cy="31" r="0.8" fill="#ffffff" />

    <!-- Nariz -->
    <path
      d="M32 36
         L30.5 38
         L33.5 38 Z"
      fill="#df8794"
    />

    <!-- Boca -->
    <path
      d="M30 39
         Q32 41 34 39"
      stroke="#61212d"
      stroke-width="1.5"
      fill="none"
      stroke-linecap="round"
    />

    <!-- Bochechas -->
    <circle cx="22" cy="36" r="2" fill="#eabbc1" opacity="0.9" />
    <circle cx="42" cy="36" r="2" fill="#eabbc1" opacity="0.9" />
  </svg>
</brand-logo>

 

  `,
};
