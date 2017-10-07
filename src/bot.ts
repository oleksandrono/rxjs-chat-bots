import { Message } from "./chat";

export function mention(name: string): (m: Message) => boolean {
  let token = '@' + name;
  return (m: Message) => { 
    return m.text.split(/\s+/).indexOf(token) > -1;
  }
}
