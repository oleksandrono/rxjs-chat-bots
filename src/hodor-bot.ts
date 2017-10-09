import { sentMessage$, incommingMessage$, Message } from './chat';
import { mention, registry } from './bot';
import { Observable } from 'rxjs';
import { hodorYell } from './hodor-yell';

export const HODOR_BOT = 'hodor';

registry.addBot({
  name: HODOR_BOT,
  description: 'Holds the door.'
});

function holdTheDoor(): Observable<string> {
  return Observable.from(hodorYell)
    .zip(Observable.interval(2000))
    .map(z => z[0]);
}

sentMessage$
  .filter(mention(HODOR_BOT))
  .switchMap(holdTheDoor)
  .map(text => new Message(HODOR_BOT, text))
  .subscribe(incommingMessage$);
