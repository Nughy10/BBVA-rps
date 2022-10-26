import {fixture, expect, elementUpdated} from '@open-wc/testing';

import '../src/bbva-rps.js';

describe('BbvaRps', () => {
    let rps; 
    beforeEach(async () => {
      rps = await fixture(`<bbva-rps></bbva-rps>`);
    });
    it('renders home onload for the first time', async () => {
          const home = rps.shadowRoot.querySelector("home-component");
          expect(home).to.exist;
    });
    it('renders game when login with user', async () => {
          const event = {detail: {page: "game", user: {name: "Pau", attempts: 7, score: 4}}}
          rps.routePath(event);
          await elementUpdated(rps);
          const game = rps.shadowRoot.querySelector("game-component")
          expect(game).to.exist;
    });
    it('renders ranking when page switch to ranking', async () => {
          const event = {detail: {page: "ranking"}}
          rps.routePath(event);
          await elementUpdated(rps);
          const ranking = rps.shadowRoot.querySelector("ranking-component")
          expect(ranking).to.exist;
    });
    it('renders login when page switch to default case', async () => {
          const event = {detail: {page: "error"}}
          rps.routePath(event);
          await elementUpdated(rps);
          const home = rps.shadowRoot.querySelector("home-component")
          expect(home).to.exist;
    });
});