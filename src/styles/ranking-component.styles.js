import { css } from "lit";

export default css`
  .ranking{
      display: flex; 
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: black;
      font-family: Arial, sans-serif;
    }
    .rankingHeader{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap; 
      width: 100vw;
      margin-top: 0rem; 
    }
    .rankingHeaderPlayer{
      color: gray;
    }
    .rankingHeaderGame{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap; 
    }
    .rankingHeaderGame h1{
      color: rgb(15, 121, 175);
      margin-right: 1rem; 
    }
    .rankingHeaderGame iron-icon{
      width: 12vw;
      height: 12vh;
      max-width: 60px;
      max-height: 60px;
      color: rgb(15, 121, 175); 
      cursor: pointer;
    }
    .rankingHeaderGame iron-icon:hover{
      color: darkblue; 
    }
    .rankingHeaderTitle{
      display: flex; 
      justify-content: center;
      align-items: center;
      width: 100vw; 
      height: 30vh;
      padding-bottom: 1rem;
    }
    .rankingHeaderTitle img{
      width: 95%;
      max-width: 540px; 
      height: auto;  
    }
    .rankingMain{
      display: flex; 
      flex-direction: row; 
      justify-content: space-around;
      align-items: center;
      width: 100vw;
    }
    .rankingMainPlayer{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .rankingMainScore{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .rankingMainAttempts{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .rankingMainPlayerTitle h1{
      color: rgb(15, 121, 175); 
      text-decoration: underline;
      font-weight: normal;
    }
    .rankingMainPlayerNames ul{
        padding: 0.5rem;
    }
    .rankingMainPlayerNames li{
      color: rgb(15, 121, 175);
      list-style: none;
      font-size: 1.4rem;
    }
    .rankingMainScoreTitle h1{
      color: rgb(75 240 87);
      text-decoration: underline;
      font-weight: normal;
    }
    .rankingMainScoreValue ul{
      padding: 0.5rem;
    }
    .rankingMainScoreValue li{
      color: rgb(75 240 87);
      list-style: none;
      font-size: 1.4rem;
    }
    .rankingMainAttemptsTitle h1{
      color: #f0c14b;
      text-decoration: underline;
      font-weight: normal;
    }
    .rankingMainAttemptsValue ul{
        padding: 0.5rem;
    }
    .rankingMainAttemptsValue li{
      color: #f0c14b;
      list-style: none;
      font-size: 1.4rem;
    }
    .rankingFooterLogout{
        display: flex; 
        flex-direction: row; 
        justify-content: center;
        align-items: center;
        flex-wrap: wrap; 
        margin-top: 2rem; 
        margin-bottom: 2rem;
    }
    .rankingFooterLogout h1{
        color: rgb(240 75 75);
        margin-right: 1rem; 
    }
    .rankingFooterLogout iron-icon{
      width: 12vw;
      height: 12vh;
      max-width: 60px;
      max-height: 60px;
      color: rgb(240 75 75);
      cursor: pointer;
    }
    .rankingFooterLogout iron-icon:hover{
      color: darkred; 
    }
`;