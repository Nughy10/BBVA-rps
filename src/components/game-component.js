import { html, LitElement } from 'lit';

import css from '../styles/game-component.styles.js';

export class GameComponent extends LitElement {
  static get properties() {
    return {
      loggedUser: {
        type: Object,
      },
      choices: {
        type: Array,
      }, 
      playerChoice: {
        type: Array,
      },
      botChoice: {
        type: Object,
      },
      loading: {
        type: Boolean
      },
      result: {
        type: String, 
      },
    };
  }

  constructor() {
    super();
    this.loggedUser = {};
    this.choices = [
      {
        name: 'Rock',
        win: ['Scissors','Lizard'],
        url: "https://i.postimg.cc/4d0KbBWp/Rock.png"
      }, 
      {
        name: 'Paper',
        win: ['Rock','Spock'],
        url: "https://i.postimg.cc/c4wmCnJF/Paper.png"
      },
      {
        name: 'Scissors',
        win: ['Paper','Lizard'],
        url: "https://i.postimg.cc/JnXyxjvg/rock-paper-scissors-icon-15.png"
      },
      {
        name: 'Lizard',
        win: ['Spock','Paper'],
        url: "https://i.postimg.cc/02X86bHJ/Lizard.png"
      },
      {
        name: 'Spock',
        win: ['Scissors','Rock'],
        url: "https://i.postimg.cc/MGVxrtZy/Spock.png"
      },
    ];
    this.playerChoice = [];
    this.botChoice = {};
    this.loading = false;
    this.result = '';
  }


  //Route path config for Ranking page switch
  handleRankingPage() {
    const customEvent = new CustomEvent('routePath', {detail : {page: "ranking"}});
    this.dispatchEvent(customEvent);
  }

  //Route path config for Login page switch
  handleLoggout() {
    const customEvent = new CustomEvent('routePath', {detail : {page: "login", user: {}}});
    this.dispatchEvent(customEvent);
  }

  //Setting game rules based on properties choices
  setGameRules(playerChoice, botChoice) {
    if (playerChoice === botChoice.name) {
      return -1;
    } 
    const checkWin = botChoice.win.includes(playerChoice);
    return checkWin; 
  }

  //Getting bot choice from random math function
  getBotChoice(){
    const botChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
      return botChoice;
  }

  //Validation result depending on the player choice
  async validateResult(e){
    const playersChoiceTarget = e.currentTarget.name;
    this.playerChoice = playersChoiceTarget.split("_");
    this.loading = true;
    
    //Comparsion the results obtained by the player and robot choices
    setTimeout(() => {
      this.botChoice = this.getBotChoice();
      this.loading = false;
      const result = this.setGameRules(this.playerChoice[0], this.botChoice);
      if (result === -1) {
        this.result = "It's a tie!";
        this.loggedUser.attempts++;
      } else if (!result) {
        this.result = "You win!";
        this.loggedUser.attempts++;
        this.loggedUser.score++; 
      } else {
        this.result = "You lose!";
        this.loggedUser.attempts++;
      }

      //Cleaning results and preparing for the next play
      setTimeout(() => {
        this.result = "";
        this.playerChoice = [];
        this.botChoice = {};
      }, 2000);
      return this.storageScore();
    }, 1500); 
  }

  //Storaging score according to the logged in user
  storageScore(){
    localStorage.setItem(
      "players." + this.loggedUser.name,
      JSON.stringify(this.loggedUser)
    );
  }


  render() {
    return html`
      <div class="game">
        <div class="gameHeader">
          <div class="gameHeaderPlayer">
            <h1>Hi ${this.loggedUser.name}!</h1>
          </div>
          <div class="gameHeaderRanking">
            <h1>Ranking</h1>
            <iron-icon @click="${this.handleRankingPage}" icon="icons:grade"></iron-icon>
          </div>
          <div class="gameFooter">
            <div class="gameFooterLogout">
              <h1>Logout</h1>
              <iron-icon @click="${this.handleLoggout}" icon="icons:exit-to-app"></iron-icon>
            </div>
          </div>
        </div>
        <div class="gameMain">
          <div class="gamePuntuation">
            <div class="gamePuntuationScore">
                <h1>Score</h1>
                <h3>${this.loggedUser.score}</h3>
            </div>
            <div class="gamePuntuationAttempts">
              <h1>Attempts</h1>
              <h3>${this.loggedUser.attempts}</h3>
            </div>
          </div>
          <div class="gameRpslk">
            <div class="gameRpslkR">
              <button @click="${this.validateResult}" id="rockBtn" name="Rock_https://i.postimg.cc/4d0KbBWp/Rock.png"><img src="https://i.postimg.cc/4d0KbBWp/Rock.png"></img></button>
            </div>
            <div class="gameRpslkP">
              <button @click="${this.validateResult}" name="Paper_https://i.postimg.cc/c4wmCnJF/Paper.png"><img src="https://i.postimg.cc/c4wmCnJF/Paper.png"></img></button>
            </div>
            <div class="gameRpslkS">
              <button @click="${this.validateResult}" name="Scissors_https://i.postimg.cc/JnXyxjvg/rock-paper-scissors-icon-15.png"><img src="https://i.postimg.cc/JnXyxjvg/rock-paper-scissors-icon-15.png"></img></button>
            </div>
            <div class="gameRpslkL">
              <button @click="${this.validateResult}" name="Lizard_https://i.postimg.cc/02X86bHJ/Lizard.png"><img src="https://i.postimg.cc/02X86bHJ/Lizard.png"></img></button>
            </div>
            <div class="gameRpslkK">
              <button @click="${this.validateResult}" name="Spock_https://i.postimg.cc/MGVxrtZy/Spock.png"><img src="https://i.postimg.cc/MGVxrtZy/Spock.png"></img></button>
            </div>
          </div>
          <div class="gameResolution">
            <div class="gameResolutionPlayer">
              <h2>${this.loggedUser.name}:</h2>
              <img src=${this.playerChoice[1]}></img>
            </div>
            <div class="gameResolutionBot">
              <h2>Bot: </h2>
              ${this.loading ? html`<h2 class="gameResolutionBotLoading">. . .</h2>` : null}
              <img src=${this.botChoice.url}></img>
            </div>
          </div>
          ${this.result.length === 0 ? html`<div class="gameResult"></div>` : html`<div id="result" class="${this.result.includes("win") ? "gameResultWin" : this.result.includes("lose") ? "gameResultLose" : "gameResultTie"}"><h4>${this.result}</h4></div>`}
        </div>
      </div>
    `;
  }


  static get styles() {
    return css;
  }
}
customElements.define('game-component', GameComponent);