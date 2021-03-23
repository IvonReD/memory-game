import { MemoryGame } from './src/MemoryGame.js';
import { Card } from './src/Card.js'
import { Players } from './src/Players.js'


window.customElements.define('memory-game', MemoryGame);
window.customElements.define('card-memory', Card);
window.customElements.define('players-game', Players);

