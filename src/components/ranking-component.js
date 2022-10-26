import { html, LitElement } from 'lit';

import css from '../styles/ranking-component.styles.js';

import '@polymer/iron-icons/device-icons';
import '@polymer/iron-icons/iron-icons';
import '@polymer/iron-icons/av-icons';
import '@polymer/iron-icon';

export class RankingComponent extends LitElement {
  static get properties() {
    return {
      players: {
        type: Array
      },
      loggedUser: {
        type: Object
      }
    };
  }

  constructor() {
    super();
    this.players = [];
    this.loggedUser = {};

    //Itareting users (getting local storage)
    for (let i = 0; i < localStorage.length; i++) {
      if (/(players\.)+/.test(localStorage.key(i))) {
        this.players.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  }

  //Route path config for Game page switch
  handleGamePage() {
    const customEvent = new CustomEvent('routePath', {detail : {page: "game"}});
    this.dispatchEvent(customEvent);
  }

  //Route path config for Login page switch
  handleLoggout() {
    const customEvent = new CustomEvent('routePath', {detail : {page: "login", user: {}}});
    this.dispatchEvent(customEvent);
  }


  render() {
    return html`
    <div class="ranking">
      <div class="rankingHeader">
        <div class="rankingHeaderPlayer">
          <h1>Hi ${this.loggedUser.name}!</h1>
        </div>
        <div class="rankingHeaderGame">
          <h1>Game</h1>
          <iron-icon @click="${this.handleGamePage}" icon="av:play-circle-filled"></iron-icon>
        </div>
        <div class="rankingFooter">
            <div class="rankingFooterLogout">
                <h1>Logout</h1>
                <iron-icon @click="${this.handleLoggout}" icon="icons:exit-to-app"></iron-icon>
            </div>
        </div>
      </div>
    <div class="rankingHeaderTitle">
      <img src="https://i.postimg.cc/VsqCx9BK/Titulo-PRSLK.png"></img>
    </div>
    <div class="rankingMain">
      <div class="rankingMainPlayer">
        <div class="rankingMainPlayerTitle">
          <h1>Players</h1>
        </div>
        <div class="rankingMainPlayerNames">
          <ul>
            ${this.players.map((player) => html`<li>${player.name}</li>`)}
          </ul>
        </div>
      </div>
      <div class="rankingMainScore">
        <div class="rankingMainScoreTitle">
          <h1>Score</h1>
        </div>
        <div class="rankingMainScoreValue">
          <ul>
          ${this.players.map((player) => html`<li>${player.score}</li>`)}
          </ul>
        </div>
      </div>
      <div class="rankingMainAttempts">
        <div class="rankingMainAttemptsTitle">
          <h1>Attempts</h1>
        </div>
        <div class="rankingMainAttemptsValue">
          <ul>
          ${this.players.map((player) => html`<li>${player.attempts}</li>`)}
          </ul>
        </div>
      </div>
    </div>
  </div>
    `;
  }


  static get styles() {
    return css;
  }
}
customElements.define('ranking-component', RankingComponent);