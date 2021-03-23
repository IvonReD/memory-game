import { html, css, LitElement } from 'lit-element';
import './Card.js'

export class MemoryGame extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        background: #F2D2FE;
        color: #0019A5;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      #container-card{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      namePlayer: {
        type: String,
        reflect: true,
        attribute:'name-player'
      }
    };
  }

  constructor() {
    super();
    this.namePlayer = 'Player';
  }



  render() {
    return html`
    <header>
    <h2> Memory Game</h2>
    <div>
      <players-game>${this.namePlayer}</players-game>
    </div>
    </header>


    <div id="container-card">
      <card-memory></card-memory>
      <!-- <card-memory></card-memory> -->
  </div>




    `;
  }
}
