import { Subject, Observable, merge } from 'rxjs';
import { scan } from 'rxjs/operators';

export class Message  {
  constructor(public author: string, public text: string) {}

  print(): string {
    return `${this.author}: ${this.text}`
  }
}

export const sentMessage$: Subject<Message> = new Subject();
export const incommingMessage$: Subject<Message> = new Subject();

export const newMessage$ = merge<Message>(sentMessage$, incommingMessage$);

export const messages$: Observable<Message[]> = newMessage$.pipe(
  scan((messages, m) => [...messages, m], [])
);

export function send(message: string) {
  sentMessage$.next(new Message('user', message));
}
