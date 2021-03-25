import { LitElement, html, css } from 'lit-element';

export class Players extends LitElement {
  static get styles() {
    return css`
      .container-players {
        display: inline-block;
        font-size: 18px;
        background: rgb(100, 12, 86);
        border-radius: 30px;
        width: 100px;
        text-align: center;
        color: white;
        padding: 5px;
        margin: 10px 90px;
      }

    `;
  }

  static get properties() {
    return {

      players: {
        type: String,
      },

    };
  }

  render() {
    return html`
    <div class="container-players">
    <div id="players">
      ${this.players}
    </div>
    </div>

    <slot></slot>
    `;
  }
}
