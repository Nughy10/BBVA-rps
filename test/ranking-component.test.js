import {fixture, expect, elementUpdated} from '@open-wc/testing';

import '../src/components/ranking-component.js';

describe('RankingComponent', () => {
    let ranking; 
    beforeEach(async () => {
      ranking = await fixture(`<ranking-component></ranking-component>`);
    });
    it('Setting localstorage user information', async () => {
          localStorage.setItem('players.Pau', JSON.stringify({name: 'Pau', attempts: 10, score: 7}));
          localStorage.setItem('players.Rut', JSON.stringify({name: 'Rut', attempts: 8, score: 4}));
          localStorage.setItem('players.Luffy', JSON.stringify({name: 'Luffy', attempts: 39, score: 37}));
    });  
    it('render game when page switch to game', async () => {
          ranking.handleGamePage();
    });  
    it('render login when page switch to logout', async () => {
          ranking.handleLoggout();
    }); 

});