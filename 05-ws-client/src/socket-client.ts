import { Manager, Socket } from "socket.io-client"

let socket: Socket;


export const connectToServer = ( token: string ) => {
    
    const manager = new Manager('localhost:3000/socket.io/socket.io.js', {
        extraHeaders: {
            hola: 'mundo',
            authentification: token
        }
    });

    socket?.removeAllListeners();
    socket = manager.socket('/');
    
    

    addListeners();

}

const addListeners = () => {
    
    const serverStatusLabel = document.querySelector('#server-status')!;
    
    const serverClientsLabel = document.querySelector('#clients-ul')!;

    const messageForm = document.querySelector<HTMLFormElement>('#message-form')!;

    const messageInput = document.querySelector<HTMLInputElement>('#message-input')!;

    const messagesUl = document.querySelector<HTMLUListElement>('#messages-ul')!;

    

    socket.on('connect', () => {
        serverStatusLabel.innerHTML= 'connected'
    })

    socket.on('disconnect', () => {
        serverStatusLabel.innerHTML= 'disconected'
    })

    socket.on('clients-updated', ( clients: string[] ) => {
        let clientsHtml = '';

        clients.forEach( clientId => {
            clientsHtml += `
                <li>${ clientId }</li>
            `
        });

        serverClientsLabel.innerHTML = clientsHtml;

    })

    socket.on('message-from-server', ( payload: { fullName: string, message: string } ) => {
        
      const newMessage = `
      
      <li> 
      <strong>${ payload.fullName }</strong> 
      <span>${ payload.message }</span>
      </li>
      
      `

      messagesUl.innerHTML += newMessage;
    })

    messageForm.addEventListener('submit', event => {
        event.preventDefault();
        
        if ( messageInput.value.trim().length <= 0 ) return;

        socket.emit('message-from-client', messageInput.value);

        messageInput.value = '';        
        
    })


}