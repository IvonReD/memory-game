import { LitElement, html, css } from 'lit-element';

export class Players extends LitElement {
  // static get styles() {
  //   return css`
  //     :host {
  //       display: block;
  //       padding: 25px;
  //       color: var(--memory-game-text-color, #000);
  //     }
  //   `;
  // }

  render() {
    return html`
    <div id="players">
    </div>
    <slot></slot>
    `;
  }
}
