const socket = io();

const chatPanel = document.getElementById('chat_panel');
const chatForm = document.getElementById('chat_form');

socket.on('message', message => {
    outputMessage(message);
});

chatForm.addEventListener('submit', event => {
    event.preventDefault();

    // Get message text
    const message = event.target.elements.msg.value;

    // Emit message to server
    socket.emit('chatMessage', message);

    // Clear input after sent
    event.target.querySelector('input').value = '';
});

// Output message to the DOM
function outputMessage(message) {
    const element = document.createElement('p');
    element.innerHTML = message;

    chatPanel.appendChild(element);
}
