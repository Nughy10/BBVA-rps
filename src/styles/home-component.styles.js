import { css } from "lit";

export default css`
  .login{
      display: flex; 
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: black;
      font-family: Arial, sans-serif;
    }
    .loginTitle{
      display: flex; 
      justify-content: center;
      align-items: center;
      width: 100vw; 
      height: 30vh;
      padding-bottom: 1rem;
    }
    .loginTitle img{
      width: 95%;
      max-width: 540px; 
      height: auto;  
    }
    .loginForm{
      display: flex; 
      flex-direction: column;
      align-items: flex-start;
      border: 0.1rem solid gray;
      padding-left: 1.5rem; 
      padding-right: 1.5rem; 
      padding-bottom: 1rem;
    }
    .loginFormTitle{
      font-size: 1.5rem;
      font-style: italic;
      margin-top: -1rem;
      color: #f0c14b;
    }
    .loginFormPlayer{
      font-size: 1.5rem;
      margin-top: -2rem;
      max-width: 540px;
    }
    .loginFormPlayerInput{
      display: flex; 
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .loginFormPlayerInput input{
      background-color: black; 
      border: 0.1rem solid gray; 
      border-radius: 0.5rem; 
      font-size: 1.2rem;
      color: white; 
      padding-left: 0.5rem;
      margin-bottom: 1rem;
      margin-top: -1rem;
      height: 5vh;
      width: 60vw;
      max-width: 540px;
    }
    .loginFormPlayerInput input::placeholder{
      color: gray; 
    }
    .loginFormPlayerInput input:focus{
      outline: none;  
      border: 0.1rem solid orange;
    }
    .loginFormPlayerInput button{
      border-radius: 0.5rem;
      border: 0.1rem solid darkorange;
      background-color: #f0c14b;
      font-size: 22px;
      font-weight: bold;
      cursor: pointer;
      padding-top: 1re;
      width: 30vw;
      height: 5vh; 
      max-width: 150px;
    }
    .loginFormPlayerInput button:hover{
        background-color: orange;
    }
    .loginLine{
      width: 9rem; 
      height: 0.1px;  
      background-color: gray;
      margin-top: 2rem;
      border: none; 
    }
    .loginRegister{
      display: flex; 
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 64vw;
      max-width: 540px;
      margin-top: -0.5rem;
    }
    .loginRegister p{
      font-size: 1.3rem;
    }
    .loginRegister button{
      border-radius: 0.5rem;
      border: 0.1rem solid darkblue;
      background-color: rgb(15, 121, 175);
      font-size: 22px;
      font-weight: bold;
      cursor: pointer;
      padding-top: 1re;
      width: 30vw;
      height: 5vh; 
      max-width: 150px;
    }
    .loginRegister button:hover{
      background-color: #0066c0;
    }
    .loginNotification{
      display: flex; 
      flex-direction: column; 
      justify-content: center; 
      align-items: center;
      width: 64vw;
      height: 0vh;
      margin-top: 2rem;
      max-width: 540px;
    }
    .invalidLogin{
      color: gray; 
      font-style: italic;
      font-size: 1.2rem; 
    }
    .validLogin{
      color: gray; 
      font-style: italic;
      font-size: 1.2rem; 
    }
    .register{
      display: flex; 
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: black;
      font-family: Arial, sans-serif;
    }
    .registerTitle{
      display: flex; 
      justify-content: center;
      align-items: center;
      width: 100vw; 
      height: 30vh;
      padding-bottom: 1rem;
    }
    .registerTitle img{
      width: 95%; 
      max-width: 540px;
      height: auto;  
    }
    .registerForm{
      display: flex; 
      flex-direction: column;
      align-items: flex-start;
      border: 0.1rem solid gray;
      padding-left: 1.5rem; 
      padding-right: 1.5rem; 
      padding-bottom: 1rem;
    }
    .registerFormTitle{
      font-size: 1.5rem;
      font-style: italic;
      margin-top: -1rem;
      color: rgb(15, 121, 175);
    }
    .registerFormPlayer{
      font-size: 1.5rem;
      margin-top: -2rem;
      max-width: 540px;
    }
    .registerFormPlayerInput{
      display: flex; 
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .registerFormPlayerInput input{
      background-color: black; 
      border: 0.1rem solid gray; 
      border-radius: 0.5rem; 
      font-size: 1.2rem;
      color: white; 
      padding-left: 0.5rem;
      margin-bottom: 1rem;
      margin-top: -1rem;
      height: 5vh;
      width: 60vw;
      max-width: 540px;
    }
    .registerFormPlayerInput input::placeholder{
      color: gray; 
    }
    .registerFormPlayerInput input:focus{
      outline: none;  
      border: 0.1rem solid orange;
    }
    .registerFormPlayerInput button{
      border-radius: 0.5rem;
      border: 0.1rem solid darkblue;
      background-color: rgb(15, 121, 175);
      font-size: 22px;
      font-weight: bold;
      cursor: pointer;
      padding-top: 1re;
      width: 30vw;
      height: 5vh; 
      max-width: 150px;
    }
    .registerFormPlayerInput button:hover{
      background-color: #0066c0;
    }
    .registerLine{
      width: 9rem; 
      height: 0.1px;  
      background-color: gray;
      margin-top: 2rem;
      border: none; 
    }
    .registerLogin{
      display: flex; 
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 64vw;
      max-width: 540px;
      margin-top: -0.5rem;
    }
    .registerLogin p{
      font-size: 1.3rem;
    }
    .registerLogin button{
      border-radius: 0.5rem;
      border: 0.1rem solid darkorange;
      background-color: #f0c14b;
      font-size: 22px;
      font-weight: bold;
      cursor: pointer;
      padding-top: 1re;
      width: 30vw;
      height: 5vh; 
      max-width: 150px;
    }
    .registerLogin button:hover{
      background-color: orange;
    }
    .registerNotification{
      display: flex; 
      flex-direction: column; 
      justify-content: center; 
      align-items: center;
      width: 64vw;
      height: 0vh;
      margin-top: 2rem;
      max-width: 540px;
    }
    .invalidRegister{
      color: gray; 
      font-style: italic;
      font-size: 1.2rem; 
    }
    .validRegister{
      color: gray; 
      font-style: italic;
      font-size: 1.2rem; 
    }
`;