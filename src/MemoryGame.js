/* eslint-disable class-methods-use-this */
/* eslint-disable arrow-body-style */
import { html, css, LitElement } from 'lit-element';
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
      height: 100vh;
      width: 100%;
      padding: 40px 0px;
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
        attribute:'name-player'
      },
      arrayEmoji: {
        type: Array
      },

    };
  }

  //metodo al dar click en card
__clickCard(cardselect){
  console.log(cardselect);
}

//Metodo ramdom y duplicidad de array
__randomCard(){
//se duplica array de emojis
  const arrayOne = this.arrayEmoji;
  const arregTwo = arrayOne;
  // console.log(arrayOne);
  // console.log(arregTwo);

  //función nativa simple para la fusión de arrays
  Array.prototype.push.apply(arrayOne, arregTwo);
  // console.log(arrayOne);
 //random del array
  let cardRandomOne =  arrayOne;
  cardRandomOne = cardRandomOne.sort(() => {return Math.random() - 0.5});
  // console.log(cardRandomOne);
//  console.log(this.arrayEmoji);
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
  this.__randomCard();
  }


  render() {
    return html`
    <header>
    <h2> Memory Game</h2>

      <players-game players="Nancy"></players-game>
      <players-game players="Pili"></players-game>

    </header>
    <div id="container-card">
    <div class="cards">
    ${this.arrayEmoji.map(i => {
      return html`
      <card-memory @click="${() => { this.__clickCard(i) }}"
      choice="${i}">
    </card-memory>
      `;
    })}
      </div>

  </div>
    `;
  }
}
