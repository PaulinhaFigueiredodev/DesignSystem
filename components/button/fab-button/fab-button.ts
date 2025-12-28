import { LitElement, html } from "lit";
import { fabButtonStyles } from './fab-button.styles';

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
  