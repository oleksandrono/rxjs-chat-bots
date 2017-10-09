import { Message } from "./chat";

const bots: Bot[] = new Array<Bot>();

export interface Bot {
  name: string,
  description: string
}

export interface RegistryUI {
  header: (text: string) => void
  describe: (bot: Bot) => void
}

export const registry = {
  addBot(bot: Bot) {
    bots.push(bot);   
  },
  bots(): Bot[] {
    return [...bots];
  },
  explore(ui: RegistryUI) {
    ui.header('Metion bot name in message to trigger it.');
    bots.forEach(b => ui.describe(b));
  }
}

export function mention(name: string): (m: Message) => boolean {
  let token = '@' + name;
  return (m: Message) => { 
    return m.text.split(/\s+/).indexOf(token) > -1;
  }
}
