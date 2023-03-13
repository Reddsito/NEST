import './style.css'
import { connectToServer } from './socket-client';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Websocket - Client </h2>
    <input id="jwt" placeholder="JWT" />
    <button id="btn-connect">Connect</button>
    
    <br/>
    <span id="server-status">offline</span>

    <ul id="clients-ul">
      
    </ul>

    <form id="message-form">
      <input type="text" id="message-input" placeholder="message"/>
    </form>

    <h3>Messages</h3>
    <ul id="messages-ul"></ul>
    
  </div>
`

// connectToServer();

const inputJwt = document.querySelector<HTMLInputElement>('#jwt')!;

const btnConnect = document.querySelector<HTMLButtonElement>('#btn-connect')!;

btnConnect.addEventListener('click', () => {

  if ( inputJwt.value.trim().length <= 0) return alert('Enter a valid JWT');

  connectToServer( inputJwt.value.trim() );

})

