import { sentMessage$, incommingMessage$, Message } from './chat';

sentMessage$
  .map(m => new Message('@echo', m.text))
  .delay(1000)
  .subscribe(incommingMessage$);
