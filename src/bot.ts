import { Message, sentMessage$, incommingMessage$ } from './chat';
import { Observable } from 'rxjs';

const bots: Bot[] = new Array<Bot>();

export interface Bot {
  name: string,
  description: string
}

export interface Reply {
  (message$: Observable<string>): Observable<string>
}

export interface RegistryUI {
  header: (text: string) => void
  describe: (bot: Bot) => void
}

export const registry = {
  addBot(bot: Bot, reply: Reply) {
    bots.push(bot);
    subscribeBot(bot, reply);
  },
  bots(): Bot[] {
    return [...bots];
  },
  explore(ui: RegistryUI) {
    ui.header('Metion bot name in message to trigger it.');
    bots.forEach(b => ui.describe(b));
  }
}

function subscribeBot(bot: Bot, reply: Reply) {
  let message$ = sentMessage$
    .filter(mention(bot.name))
    .map(m => m.text);
  reply(message$)
    .map(m => new Message(bot.name, m))
    .subscribe(incommingMessage$);
}

export function mention(name: string): (m: Message) => boolean {
  let token = '@' + name;
  return (m: Message) => { 
    return m.text.split(/\s+/).indexOf(token) > -1;
  }
}
