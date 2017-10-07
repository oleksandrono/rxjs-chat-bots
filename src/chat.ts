import { Subject } from 'rxjs';

export interface Message {
  text: string
  author: string
  print: () => string
}

class UserMessage implements Message {
  author: string = 'user';
  constructor(public text: string) {}

  print(): string {
    return `${this.author}: ${this.text}`
  }
}

export const sentMessage$: Subject<Message> = new Subject();

export function send(message: string) {
  sentMessage$.next(new UserMessage(message));
}
