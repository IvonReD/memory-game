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
      arrCompare: {
        type: Array,
      },

    };
  }


  _clickCard(e) {
    e.target.dispatchEvent(new Event('open'));
    if (this.arrCompare.length < 2) {
      console.log(e.target.choice)
      this.arrCompare.push(e.target.choice)
      console.log(this.arrCompare)
      if(this.arrCompare[0] === this.arrCompare[1]) {
      console.log("es correcto")
      }else{
        console.log("es incorrecto")
      }
    }
    // console.log(this.arrCompare)
  }

  _randomCard() {
    const arrayOne = this.arrayEmoji;
    const arregTwo = arrayOne;
    Array.prototype.push.apply(arrayOne, arregTwo);
    let cardRandomOne = arrayOne;
    cardRandomOne = cardRandomOne.sort(() => {
      return Math.random() - 0.5
    });
  }

  _updateInfo(){
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
    this.arrCompare = [];

  }

  constructor() {
    super();
    this.namePlayer = 'Player';
    this._updateInfo();
    this.level = 0;
  }

  updated(changedProperties) {
    if (changedProperties.has('level')) {
      this._updateInfo();
    }
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
              choice="${i}">
              </card-memory>
      `;
    })}
      </div>
      </div>
    `;
  }
}
