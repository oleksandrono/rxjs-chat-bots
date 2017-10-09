import { sentMessage$, incommingMessage$, Message } from './chat';
import { mention, registry } from './bot';
import { currentWeather } from './weather.service';

export const WEATHER_BOT = 'weather';

registry.addBot({
  name: WEATHER_BOT,
  description: 'Responds with current weather in Cherkasy.'
});

sentMessage$
  .filter(mention(WEATHER_BOT))
  .mergeMap(currentWeather)
  .map(w => `${w.temp}C, ${w.humidity}%, ${w.description}`)
  .map(m => new Message(WEATHER_BOT, m))
  .subscribe(incommingMessage$);
