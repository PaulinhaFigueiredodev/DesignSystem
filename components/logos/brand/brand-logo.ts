import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { brandLogoStyles } from "./brand-logo.styles";

/**
 * `<brand-logo>`
 *
 * Logo institucional.
 * Implementação fiel ao comportamento do site de referência.
 *
 * @slot SVG inline ou logo customizado
 *
 * @cssprop --brand-logo-size - Tamanho do logo (default: 48px)
 */
export class BrandLogo extends LitElement {
  static styles = brandLogoStyles;

  @property({ type: String }) href = "/";
  @property({ type: String }) src = "";
  @property({ type: String }) alt = "Gato";

  render() {
    return html`
      <a href=${this.href} aria-label=${this.alt}>
        <slot>
          ${this.src
            ? html`<img src=${this.src} alt=${this.alt} />`
            : null}
        </slot>
      </a>
    `;
  }
}

customElements.define("brand-logo", BrandLogo);


