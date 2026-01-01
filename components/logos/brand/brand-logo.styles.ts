import { css } from "lit";

/**
 * Estilos do componente `<brand-logo>`
 *
 *
 * Tokens:
 * - --brand-logo-size: tamanho do logo (default: 48px)
 * - --brand-logo-focus: cor do outline no foco
 */
export const brandLogoStyles = css`
  :host {
    display: block;
  }

  a {
    display: block;
    margim: 0;
    padding: 0;
    text-decoration: none;
    line-height: 0;
    outline: none;
  }

  img,
  svg {
    display: block;
    width: var(--brand-logo-size, 48px);
    height: var(--brand-logo-size, 48px);
  }
`;
