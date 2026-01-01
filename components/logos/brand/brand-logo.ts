import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { brandLogoStyles } from "./brand-logo.styles.ts";

export class BrandLogo extends LitElement {
  static styles = brandLogoStyles;

  @property({ type: String }) href = "/";
  @property({ type: String }) alt = "Brand Logo";
  @property({ type: String }) src = "";

  render() {
    return html`
      <a href=${this.href} aria-label="Página inicial">
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
