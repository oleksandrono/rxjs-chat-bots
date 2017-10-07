import * as chat from './chat';
import './echo-bot';

chat.messages$
  .subscribe(printAll);

function printAll(messages: chat.Message[]) {
  console.clear();
  messages.forEach((m) => {
    console.log(m.print());
  })
}

declare global {
  interface Window { chat: any }
}

window.chat = chat;
