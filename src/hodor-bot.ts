import { Observable } from 'rxjs';

import { registry, Bot } from './bot';
import { hodorYell } from './hodor-yell';

export const HODOR_BOT: Bot = {
  name: 'hodor',
  description: 'Holds the door.'
};

registry.addBot(HODOR_BOT, m => m.switchMap(holdTheDoor));

function holdTheDoor(): Observable<string> {
  return Observable.from(hodorYell)
    .zip(Observable.interval(2000))
    .map(z => z[0]);
}
