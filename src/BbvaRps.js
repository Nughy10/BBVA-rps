import { LitElement, html } from 'lit';
import { installRouter } from "pwa-helpers/router.js";

import "./components/home-component.js";
import "./components/game-component.js";
import "./components/ranking-component.js";

export class BbvaRps extends LitElement {
  static get properties() {
    return {
      page: {
        type: String,
      },
      loggedUser: {
        type: Object,
      }
    };;
  }

  constructor() {
    super()
    this.page = "home";
    this.loggedUser = {};

    //installRouter config as a constructor function
    installRouter((location) => {
      this.handleRouterPath(location);
    });
  }

  //Routes Path config for page switching
  handleRouterPath(location) {
    const path = location.pathname;
    this.page = path === "/" ? "home" : path.slice(1);
  }

  //Route Path event for all components 
  routePath(event) {
    const detail = event.detail;
    window.history.pushState({}, "", detail.page);
    this.handleRouterPath(window.location);
    if(detail.user) {
      this.loggedUser = detail.user;
    }
  }

  //Route Path event for app
  routePathApp(data) {
    window.history.pushState({}, "", data.page);
    this.handleRouterPath(window.location);
  }

  //Active Page component render 
  _renderActivePage() {
    switch (this.page) {
      case "home": {
        return html`<home-component @routePath="${this.routePath}"></home-component>`;
      }
      case "game": {
        return html`<game-component .loggedUser=${this.loggedUser} @routePath="${this.routePath}"></game-component>`;
      }
      case "ranking": {
        return html`<ranking-component .loggedUser=${this.loggedUser} @routePath="${this.routePath}"></ranking-component>`;
      }
      default: {
        this.routePathApp({page: "home"})
        return html`<home-component @routePath="${this.routePath}"></home-component>`;
      }
    }
  }


  render() {
    return html`
      ${this._renderActivePage()}
    `;
  }


  static get styles() {
    return;
  }
}

