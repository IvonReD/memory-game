import {
  LitElement,
  html,
  css
} from 'lit-element';

import { classMap } from 'lit-html/directives/class-map';


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

      open:{
        type:Boolean
      },
      played:{
        type:Boolean
      }

    };
  }



  constructor() {
    super();
    this.choice = '☀';

  }

  connectedCallback(){
    super.connectedCallback();
    this.open= false;
    this.played = false;
  }


  firstUpdated(){
    this.addEventListener('open', () =>{
      this.open = true;
    });
    this.addEventListener('close', () =>{
      this.open = false;
    });
    this.addEventListener('played', () =>{
      this.played = false;
    })

  }


  render() {
    return html`
    <div id="cards" class="${this.played ? 'played' : ''}">*
    <span  class="${this.open ? 'open' : 'close'}"> ${this.choice}
    </span>
    </div>
    `;
  }
}
