import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FabButtonStyles } from './fab-button.css'

@customElement('fab-button')
export class FabButton extends LitElement {
    static styles = css`${FabButtonStyles}`;

    render(){
        return html`
            <button class="fab-button"></button>
        `;
    }
}