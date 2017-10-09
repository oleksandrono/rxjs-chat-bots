import { newMessage$, Message, send } from './chat';
import { Observable } from 'rxjs/Observable';

const messageListEl: Element = document.querySelector('#messages');
const formEl: HTMLFormElement = document.querySelector('#message-entry') as HTMLFormElement; 
const messageInputEl = document.querySelector('input[name="message"]') as HTMLInputElement; 

function appendMessage(m: Message) {
  let li = document.createElement('li');
  li.innerText = m.print();
  messageListEl.appendChild(li);
}

newMessage$
  .subscribe(appendMessage);

Observable.fromEvent<Event>(formEl, 'submit')
  .subscribe(e => {
    e.preventDefault();
    send(messageInputEl.value)
    formEl.reset();
  });
