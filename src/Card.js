import { LitElement, html, css } from 'lit-element';

export class Card extends LitElement {
  static get styles() {
    return css`
      :host {
        background: #551DA5;
        border-radius: 20px;
        width: 70px;
        text-align: center;
        color: white;
      }
      :host(:hover){
        box-shadow: 0 5px 30px #15F7CE;
      }
      #options{
        display: none;
      }
      :host(:hover) #options {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      :host(:hover) #unknown-value{
        display: none;
      }
      #unknown-value{
        font-size: 4em;
      }
      ul{
        display: flex;
        flex-direction: column;
        align-content: space-evenly;
        padding: 0;
        height: 100%;
      }
      ul li {
        list-style: none;
      }

      ul li button{
        height: 40px;
      }

      .hide {
        display: none;
      }
    `;
  }

  static get properties() {
    return {
      isPlayed: {
        type: Boolean,
      },
      choice: {
        type: String,
      },
      valueClass:{
        type: String
      }
    };
  }

  constructor() {
    super();
    this.isPlayed = false;
    this.choice= '☀';
  }


  render() {
    return html`
    <div id="unknown-value">
      ?
    </div>
    <div id="options">
      <ul>
        <li>
          <button>🦓</button>
        </li>
      </ul>
    </div>
    <slot></slot>
    `;
  }
}
