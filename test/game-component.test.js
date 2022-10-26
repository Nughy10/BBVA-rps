import {fixture, expect, elementUpdated, aTimeout} from '@open-wc/testing';

import '../src/components/game-component.js';

describe('GameComponent', () => {
    let game; 
    beforeEach(async () => {
      game = await fixture(`<game-component></game-component>`);
    });
    it('render ranking when page switch to ranking', async () => {
          game.handleRankingPage();
    });
    it('render login when page switch to logout ', async () => {
          game.handleLoggout();
    });
    it('set game rules for player and bot', async () => {
          game.setGameRules('Scissors',{
            name: 'Spock',
            win: ['Scissors','Rock'],
            url: "https://i.postimg.cc/MGVxrtZy/Spock.png"
          });
          game.setGameRules('Spock',{
            name: 'Spock',
            win: ['Scissors','Rock'],
            url: "https://i.postimg.cc/MGVxrtZy/Spock.png"
          });
    });
    it('get bot choice to random function', async () => {
          game.getBotChoice();
    });
    it('check result obtained by the player and robot (win case) ', async () => {
          const result = game.shadowRoot.querySelector('#result')
          expect(result).not.to.exist;
          await game.shadowRoot.querySelector('#rockBtn').click();
          await aTimeout(1500);
          expect(game.result).to.exist; 
    });
    it('check result obtained by the player and robot (tie case) ', async () => {
      const result = game.shadowRoot.querySelector('#result')
      expect(result).not.to.exist;
      await game.shadowRoot.querySelector('#rockBtn').click();
      await aTimeout(1500);
      expect(game.result).to.exist; 
    });
    it('check result obtained by the player and robot (tie case) ', async () => {
      const result = game.shadowRoot.querySelector('#result')
      expect(result).not.to.exist;
      await game.shadowRoot.querySelector('#rockBtn').click();
      await aTimeout(1500);
      expect(game.result).to.exist; 
    });
    it('check result obtained by the player and robot (lose case) ', async () => {
      const result = game.shadowRoot.querySelector('#result')
      expect(result).not.to.exist;
      await game.shadowRoot.querySelector('#rockBtn').click();
      await aTimeout(1500);
      expect(game.result).to.exist; 
    });
    it('storage the player score', async () => {
          game.loggedUser = {name: 'Pau', attempts: 20, score: 4}
          game.storageScore();
    });
    it('win result case', async () => {
          game.result = "win";
          await elementUpdated()
          const divClass = game.shadowRoot.querySelector('#result').className;
          expect(divClass).equal("gameResultWin");
    });
    it('lose result case', async () => {
          game.result = "lose";
          await elementUpdated()
          const divClass = game.shadowRoot.querySelector('#result').className;
          expect(divClass).equal("gameResultLose");
    });
    it('tie result case', async () => {
          game.result = "tie";
          await elementUpdated()
          const divClass = game.shadowRoot.querySelector('#result').className;
          expect(divClass).equal("gameResultTie");
    });
});