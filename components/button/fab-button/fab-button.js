import { LitElement, html } from "https://unpkg.com/lit@3/index.js?module";
import { fabButtonStyles } from "./styles.js";

class FabButton extends LitElement {
  static styles = [fabButtonStyles];

  constructor() {
    super();
  }

  render() {
    return html`
      <button>
        <span class="label">Salvar</span>
      </button>
    `;
  }
}
customElements.define("fab-button", FabButton);
