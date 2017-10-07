import * as chat from './chat';
import './echo-bot';

chat.newMessage$
  .map(m => m.print())
  .subscribe(console.log);

declare global {
  interface Window { chat: any }
}

window.chat = chat;
