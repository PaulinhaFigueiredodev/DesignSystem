import { LitElement, html, css }
  from 'https://unpkg.com/lit@3/index.js?module';

/**
 * FAB Button
 * ------------------------
 * - Visual apenas - sera implementado comportamento posteriormente
 * - Sem ações
 * - Sem eventos
 * - Sem layout
 */
class FabButton extends LitElement {

  static styles = css`
    :host {
      /* Design tokens */
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

      font-size: 24px;
      cursor: pointer;
    }
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
