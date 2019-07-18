import { registry, Bot } from '../bot';
import {interval, Observable, of} from 'rxjs';
import {filter, map, reduce, switchMap, throttleTime} from "rxjs/operators";

export const IMP_BOT: Bot = {
  name: 'imp',
  description: 'Stay drunk 5 second'
};

registry.addBot(IMP_BOT, QueenNeedLove);

const joke = '--here must be joke--';

function QueenNeedLove (message$: Observable<string>): Observable<string> {
  return message$.pipe(
    
    
    
  );
}
