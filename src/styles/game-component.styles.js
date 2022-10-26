import { css } from "lit";

export default css`
  .game{
      display: flex; 
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: black;
      font-family: Arial, sans-serif;
    }
    .gameHeader{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap; 
      width: 100vw;
      margin-top: 0rem; 
    }
    .gameHeaderPlayer{
      color: gray;
    }
    .gameHeaderRanking{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap; 
    }
    .gameHeaderRanking h1{
      color: #f0c14b;
      margin-right: 1rem; 
    }
    .gameHeaderRanking iron-icon{
      width: 12vw;
      height: 12vh;
      max-width: 60px;
      max-height: 60px;
      color: #f0c14b;
      cursor: pointer;
    }
    .gameHeaderRanking iron-icon:hover{
      color: yellow; 
    }
    .gameHeaderTitle{
      display: flex; 
      justify-content: center;
      align-items: center;
      width: 100vw; 
      height: 30vh;
      padding-bottom: 1rem;
    }
    .gameHeaderTitle img{
      width: 95%;
      max-width: 540px; 
      height: auto;  
    }
    .gameMain{
      display: flex; 
      flex-direction: column; 
      justify-content: space-around;
      align-items: center;
      width: 100vw;
      padding-bottom: 1rem; 
    }
    .gamePuntuation{
      display: flex; 
      flex-direction: row; 
      justify-content: space-evenly;
      align-items: center;
      width: 100vw;
    }
    .gamePuntuationAttempts{
      display: flex; 
      flex-direction: column; 
      align-items: center;
    }
    .gamePuntuationAttempts h1{
      color: #f0c14b;
      text-decoration: underline;
      font-weight: normal;
    }
    .gamePuntuationAttempts h3{
      color: #f0c14b;
      font-size: 1.4rem;
      margin-top: 0rem;
    }
    .gamePuntuationScore{
      display: flex; 
      flex-direction: column; 
      align-items: center;
    }
    .gamePuntuationScore h1{
      color: rgb(75 240 87);
      text-decoration: underline;
      font-weight: normal;
    }
    .gamePuntuationScore h3{
      color: rgb(75 240 87);
      font-size: 1.4rem;
      margin-top: 0rem;
    }
    .gameRpslk{
      display: flex; 
      flex-direction: row; 
      flex-wrap: wrap; 
      align-items: center; 
      justify-content: center; 
      margin-top: 1rem; 
      margin-bottom: 1rem; 
    }
    .gameRpslkR button{
      background-color: transparent; 
      border: none;
      padding-right: 1rem; 
      padding-left: 1rem; 
      cursor: pointer; 
    }
    .gameRpslkR img{
      width: 20vw;
      max-width: 100px;
      height: auto;
    }
    .gameRpslkP button{
      background-color: transparent;
      border: none;
      padding-right: 1rem; 
      padding-left: 1rem; 
      cursor: pointer; 
    }
    .gameRpslkP img{
      width: 20vw;
      max-width: 100px;
      height: auto;
    }
    .gameRpslkS button{
      background-color: transparent;
      border: none;
      padding-right: 1rem; 
      padding-left: 1rem; 
      cursor: pointer; 
    }
    .gameRpslkS img{
      width: 20vw;
      max-width: 100px;
      height: auto;
    }
    .gameRpslkL button{
      background-color: transparent; 
      border: none;
      padding-right: 1rem; 
      padding-left: 1rem; 
      cursor: pointer; 
    }
    .gameRpslkL img{
      width: 20vw;
      max-width: 100px;
      height: auto;
    }
    .gameRpslkK button{
      background-color: transparent;
      border: none;
      padding-right: 1rem; 
      padding-left: 1rem; 
      cursor: pointer; 
    }
    .gameRpslkK img{
      width: 20vw;
      max-width: 100px;
      height: auto;
    }
    .gameResolution{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      width: 100vw;
      height: 15vh; 
    }
    .gameResolutionPlayer{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: gray;
    }
    .gameResolutionPlayer img{
      width: 15vw;
      max-width: 85px;
      height: auto;
      margin-left: 1rem;
    }
    .gameResolutionBot{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: gray;
    }
    .gameResolutionBot img{
      width: 15vw;
      max-width: 85px;
      height: auto;
      margin-left: 1rem;
    }
    .gameResolutionBotLoading {
      margin-left: 1rem;
    }
    .gameResult {
      width: 10px;
      height: 85px;
    }
    .gameResultWin {
      color: rgb(75 240 87);
      font-size: 1.4rem;
    }
    .gameResultTie {
      color: #f0c14b;
      font-size: 1.4rem;
    }
    .gameResultLose {
      color: rgb(240 75 75);
      font-size: 1.4rem;
    }
    .gameFooterLogout{
        display: flex; 
        flex-wrap: wrap; 
        flex-direction: row; 
        justify-content: center;
        align-items: center;
        margin-top: 2rem; 
        margin-bottom: 2rem;
    }
    .gameFooterLogout h1{
        color: rgb(240 75 75);
        margin-right: 1rem; 
    }
    .gameFooterLogout iron-icon{
      width: 12vw;
      height: 12vh;
      max-width: 60px;
      max-height: 60px;
      color: rgb(240 75 75);
      cursor: pointer;
    }
    .gameFooterLogout iron-icon:hover{
      color: darkred; 
    }
`;