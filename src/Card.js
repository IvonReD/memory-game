import {
  LitElement,
  html,
  css
} from 'lit-element';

export class Card extends LitElement {
  static get styles() {
    return css `
    #cards {
        background: deepskyblue;
        font-size: 3rem;
        width: 58px;
        margin: 15px;
        border-radius: 10px;
        width: 70px;
        text-align: center;
        color: white;

      }
     #cards:hover {
        box-shadow: 0 5px 30px #ed08da;
      }
      .open {
        display: block;
        margin: -62px 0px;
      }

      .close{
        display: none;
      }

    `;
  }

  static get properties() {
    return {
      choice: {
        type: String,
      },

      open: {
        type: Boolean
      },
      played: {
        type: Boolean
      }

    };
  }



  constructor() {
    super();
    this.choice = '☀';

  }

  connectedCallback() {
    super.connectedCallback();
    this.open = false;
    this.played = false;
  }


  firstUpdated() {
    this.addEventListener('open', () => {
      this.open = true;
    });
    this.addEventListener('close', () => {
      this.open = true;
    });
    this.addEventListener('played', () => {
      this.played = false;
    })

  }


  render() {
    return html `
    <div id="cards" class="${this.played ? 'played' : ''}">*
    <div  class="${this.open ? 'open' : 'close'}"> ${this.choice}
    </div>
    </div>
    `;
  }
}
