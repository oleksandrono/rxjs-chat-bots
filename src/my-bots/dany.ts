import { registry, Bot } from '../bot';
import {interval, Observable, of} from 'rxjs';
import {map, delay, reduce, switchMap} from "rxjs/operators";

export const DANY_BOT: Bot = {
  name: 'dany',
  description: 'Queen need love'
};

registry.addBot(DANY_BOT, QueenNeedLove);


function QueenNeedLove (message$: Observable<string>): Observable<string> {
  return message$.pipe(
    switchMap(()=>interval(1500).pipe(
      map(i => i % 2 === 1 ? 'Queen need your love' : 'I am a queen')
      )
    ),
    delay(100)
  );
}
