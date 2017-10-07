import * as chat from './chat';

chat.sentMessage$
  .map(m => m.print())
  .subscribe(console.log);

declare global {
  interface Window { chat: any }
}

window.chat = chat;

