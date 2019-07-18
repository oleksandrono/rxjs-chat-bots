import { registry, Bot } from '../bot';
import {Observable} from 'rxjs';
import {map, scan} from 'rxjs/operators';

export const CALC_BOT: Bot = {
  name: 'add',
  description: 'Add current value to previous.'
};

registry.addBot(CALC_BOT, add);

function add (message$: Observable<string>): Observable<string> {
  return message$.pipe(
    map(message=>message.replace('@calc', '')),
    scan((acc, curr) => Number(acc) + Number(curr), 0),
    map(num => String(num))
  );
}
