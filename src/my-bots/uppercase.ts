import { registry, Bot } from '../bot';
import {Observable} from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

export const UPPERCASE_BOT: Bot = {
  name: 'uppercase',
  description: 'Uppercase your input.'
};

registry.addBot(UPPERCASE_BOT, toUppercase);

function toUppercase (message$: Observable<string>): Observable<string> {
  return message$.pipe(
    map(message => message.replace('@uppercase', '').toUpperCase())
  );
}
