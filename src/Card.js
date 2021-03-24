import {
  LitElement,
  html,
  css
} from 'lit-element';

export class Card extends LitElement {
  static get styles() {
    return css `
      #cards-hidden, #cards-open {
        background: deepskyblue;
        font-size: 3rem;
        width: 58px;
        margin: 15px;
        border-radius: 10px;
        width: 70px;
        text-align: center;
        color: white;
      }
    `;
  }

  static get properties() {
    return {

      choice: {
        type: String,
      },
      open: {
        type: Boolean,
      },

    };
  }

  constructor() {
    super();
    this.isPlayed = false;
    this.choice = '☀';
    this.open = false;

  }



  render() {
    return html `
    <div>
      <div id="cards-hidden">? </div>
      <div id="cards-open">${this.choice}</div>
    </div>

    <slot></slot>
    `;
  }
}
