import {fixture, expect, elementUpdated} from '@open-wc/testing';

import '../src/components/home-component.js';

describe('HomeComponent', () => {
    let home; 
    beforeEach(async () => {
      home = await fixture(`<home-component></home-component>`);
    });
    it('login player successfully if the name is correct', async () => {
      localStorage.setItem('players.Pau', JSON.stringify({name: 'Pau', attempts: 10, score: 7}));
      home.shadowRoot.querySelector('#nameLogin').value = "Pau";
      home.handleLogin();
    });
    it('non login player if the name doesnt exist', async () => {
      home.shadowRoot.querySelector('#nameLogin').value = "Leo";
      home.handleLogin();
    });
    it('non login player if the field is empty', async () => {
      home.shadowRoot.querySelector('#nameLogin').value = "";
      home.handleLogin();
    });
    it('render register or login when page switcht', async () => {
      home.handleLoginBool();
    });
    it('register player if the name is correct', async () => {
      home.handleLoginBool();
      await elementUpdated(home);
      home.shadowRoot.querySelector('#nameRegister').value = "Kiko";
      home.shadowRoot.querySelector('#registerBtn').click()
      home.shadowRoot.querySelector('#registerBtn').click()
    });
    it('non-register player if the name is incorrect', async () => {
      home.handleLoginBool();
      await elementUpdated(home);
      home.shadowRoot.querySelector('#nameRegister').value = "";
      home.shadowRoot.querySelector('#registerBtn').click()
    });
});