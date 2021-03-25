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
      addCards:{
        type: Array,
      },
      cardCorrect:{
        type: Array
      }

    };
  }


  _clickCard(e) {
    this.openCard(e);
    const cardValue = e.target.choice;
    this.arrCompare.push(cardValue);
    console.log(this.arrCompare, 'comparar')

    const cardHtml = e.target;
    this.addCards.unshift(cardHtml);
    console.log(this.addCards, 'target')
    this.compareCards();
  }

  openCard(e){
    e.target.dispatchEvent(new Event('open'));
  }

  correctCards(arrayCards){
    arrayCards.forEach(card  => {
      console.log(card)
      // this.cardCorrect.push(card);
    })
  }

  closeCards(e){
    // impares.forEach(card => {
      // setTimeout(() =>{
      //   e.target.dispatchEvent(new Event('close'));
      // }, 1000);
    // })

    return new Promise(res => {
      setTimeout(() => {
        e.target.dispatchEvent(new Event('close'));
        res();
      }, 1500);
    });
  }

  compareCards(){
    console.log(this.arrCompare);
    if (this.arrCompare.length >= 2) {
      if (this.arrCompare[0] === this.arrCompare[1]) {
        console.log('Son pares');
        this.correctCards(this.addCards);
      }else{
        this.closeCards(this.addCards);
        console.log('Son Impares');
      }
      this.arrCompare.splice(0);
      this.addCards.splice(0);
    }
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


  constructor() {
    super();
    this.namePlayer = 'Player';
    this.level = 0;
    this.addCards= [];
    this.cardCorrect= [];
    this.arrCompare = [];
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
              choice="${i}">
              </card-memory>
      `;
    })}
      </div>
      </div>
    `;
  }
}
