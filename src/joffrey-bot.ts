import { Observable } from 'rxjs';

import { registry, Bot, hasWord } from './bot';

export const JOFFREY_BOT: Bot = {
  name: 'joffrey',
  description: 'Constantly repeat that he is the king untill wedding.'
};

registry.addBot(JOFFREY_BOT, iAmTheKing);

function iAmTheKing(message$: Observable<string>): Observable<string> {
  let isWedding = hasWord('wedding');
  let wedding$ = message$.filter(isWedding);

  return message$
    .filter(m => !isWedding(m))
    .switchMap(m =>
      Observable.interval(3000)
        .map(i => 'I am the king! ')
        .takeUntil(wedding$))
    .merge(
      wedding$.delay(200)
        .map(m => '🍷 cough... cough... cough... 💀'));
}
