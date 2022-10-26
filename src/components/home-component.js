import { html, LitElement } from 'lit';

import css from '../styles/home-component.styles.js';

export class HomeComponent extends LitElement {
  static get properties() {
    return {
      alertMessage : {
        type: String,
      },
      login: {
        type: Boolean,
      }
    };
  }

  constructor() {
    super();
    this.alertMessage = "";
    this.login = true;
  }

   //User login config (getting local storage)
  handleLogin() {
    const userName = this.shadowRoot.getElementById("nameLogin");
    if (userName.value  == "") {
      this.alertMessage = "Enter a valid name..";
    } else if (!localStorage.getItem("players." + userName.value)) {
      this.alertMessage = "Name not registered!";
    } else {
      const user = JSON.parse(localStorage.getItem("players." + userName.value));
      this.handleAfterLogReg(user)
    }
  }

  handleAfterLogReg(userObj) {
    const customEvent = new CustomEvent('routePath', {detail : {page: "game", user: userObj}});
    this.dispatchEvent(customEvent);
  }

  //User register config (setting local storage)
  handleRegister() {
    const userName = this.shadowRoot.getElementById("nameRegister");
    if (userName.value == "") {
      this.alertMessage = "Enter a valid name...";
    } else if (!localStorage.getItem("players." + userName.value)) {
      let user = {
        name: userName.value,
        score: 0,
        attempts: 0,
      };
      localStorage.setItem("players." + userName.value, JSON.stringify(user));
      this.handleAfterLogReg(user)
    } else {
      this.alertMessage = "Name already registered!";
    }
  }
  //Route path config for Register page switch
  handleLoginBool() {
    this.alertMessage = "";
    this.login = this.login ? false : true;
  }


  render() {
    return html`
    ${this.login ? html`
    
    <div class="login">
      <div class="loginTitle">
        <img src="https://i.postimg.cc/VsqCx9BK/Titulo-PRSLK.png"></img>
      </div>
      <div class="loginForm">
        <div class="loginFormTitle">
          <h2>Login</h2>
        </div>
        <div class="loginFormPlayer">
          <div class="loginFormPlayerName">
            <h3>Name</h3>
          </div>
          <div class="loginFormPlayerInput">
            <input id="nameLogin" type="text" placeholder="Enter your name"></input>
            <button @click=${this.handleLogin}>Login</button>
          </div>
        </div>
        <div class="loginNotification">
          ${this.alertMessage.length === 0 ? null : html`<div class="invalidLogin"><p>${this.alertMessage}</p></div>`}
        </div>
        <hr class="loginLine"></hr>
        <div class="loginRegister">
          <p>Don't have an account yet?</p>
          <button @click=${this.handleLoginBool}>Register</button>
        </div>
      </div>
    </div>
    ` : html`
    <div class="register">
      <div class="registerTitle">
        <img src="https://i.postimg.cc/VsqCx9BK/Titulo-PRSLK.png"></img>
      </div>
      <div class="registerForm">
        <div class="registerFormTitle">
          <h2>Register</h2>
        </div>
        <div class="registerFormPlayer">
          <div class="registerFormPlayerName">
            <h3>Name</h3>
          </div>
          <div class="registerFormPlayerInput">
            <input id="nameRegister" type="text" placeholder="Enter your name"></input>
            <button id="registerBtn" @click=${this.handleRegister}>Register</button>
            </div>
          </div>
          <div class="registerNotification">
            ${this.alertMessage.length === 0 ? null : html`<div class="invalidRegister"><p>${this.alertMessage}</p></div>`}
          </div>
        <hr class="registerLine"></hr>
        <div class="registerLogin">
          <p>Already have an account?</p>
          <button @click=${this.handleLoginBool}>Login</button>
        </div>
      </div>
    </div>
    `}
    `;
  }


  static get styles() {
    return css;
  }
}

customElements.define('home-component', HomeComponent);