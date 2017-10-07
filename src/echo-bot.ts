import { sentMessage$, incommingMessage$, Message } from './chat';
import { mention } from './bot';

export const ECHO_BOT = 'echo';

sentMessage$
  .filter(mention(ECHO_BOT))
  .map(m => new Message(ECHO_BOT, m.text))
  .delay(1000)
  .subscribe(incommingMessage$);
