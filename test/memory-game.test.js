import { html, fixture, expect } from '@open-wc/testing';

import '../memory-game.js';

describe('MemoryGame', () => {
  it('properties of component', async () => {
    const el = await fixture(html`<memory-game></memory-game>`);
    expect(el.namePlayer).to.equal('Hey there');
  });

  it('event of the button click', async () => {
    const el = await fixture(html`<memory-game></memory-game>`);
    el.shadowRoot.querySelector('card-memory').click();
    expect(el._clickCard).to.equal(Event);
  });
});
