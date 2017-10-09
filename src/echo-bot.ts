import { sentMessage$, incommingMessage$, Message } from './chat';
import { mention, registry } from './bot';

export const ECHO_BOT = 'echo';

registry.addBot({
  name: ECHO_BOT,
  description: 'Repeats your message after 1 second delay.'
});

sentMessage$
  .filter(mention(ECHO_BOT))
  .map(m => new Message(ECHO_BOT, m.text))
  .delay(1000)
  .subscribe(incommingMessage$);
