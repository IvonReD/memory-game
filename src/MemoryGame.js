/* eslint-disable class-methods-use-this */
/* eslint-disable arrow-body-style */
import {
  html,
  css,
  LitElement
} from 'lit-element';
import './Card.js'

export class MemoryGame extends LitElement {


  static get styles() {
    return css `
    :host {
      display: flex;
      background: #F2D2FE;
      color: #0019A5;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: Georgia, 'Times New Roman', Times, serif;
    }

    h2{
      text-align: center;
    }

    .cards {
      height: 68vh;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      align-content: center;
      justify-items: center;
    }
    `;
  }

  static get properties() {
    return {
      namePlayer: {
        type: String,
        reflect: true,
        attribute: 'name-player'
      },
      arrayEmoji: {
        type: Array
      },
      opened: {
        type: Array,
      },
      arrayAll: {
        type: Array,
        value: [],
      },

    };
  }

  //metodo al dar click en card
  _clickCard(e) {
    e.target.dispatchEvent(new Event('open'));
    console.log(e.target)
  }

  //Metodo ramdom y duplicidad de array
  _randomCard() {
    //se duplica array de emojis
    const arrayOne = this.arrayEmoji;
    const arregTwo = arrayOne;


    //función nativa simple para la fusión de arrays
    Array.prototype.push.apply(arrayOne, arregTwo);
    //random del array
    let cardRandomOne = arrayOne;
    cardRandomOne = cardRandomOne.sort(() => {
      return Math.random() - 0.5
    });
    //  this.arrayAll =  cardRandomOne.map(x => ({
    //     value: x,
    //     isOpen: false,
    // }))
  }

  constructor() {
    super();
    this.namePlayer = 'Player';
    this.arrayEmoji = [
      '🐼',
      '🐱',
      '🐭',
      '🐰',
      '🐳',
      '🦀',
      '🐉',
      '🦋',
      '🐸',
      '🐠',
      '🐻',
      '🐷',
      '🐧',
      '🦓',
      '🐣'
    ];
    this._randomCard();
  }



  render() {
    return html `
    <header>
    <h2> Memory Game</h2>
      <players-game players="Nancy"></players-game>
      <players-game players="Pili"></players-game>
    </header>
    <div id="container-card">

      <div class="cards">
         ${this.arrayEmoji.map(i => {
            return html`
             <card-memory @click="${this._clickCard}"
              .choice="${i}">
              </card-memory>
      `;
    })}
      </div>
      </div>
    `;
  }
}
