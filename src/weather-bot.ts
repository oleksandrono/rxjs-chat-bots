import { registry, Bot } from './bot';
import { currentWeather } from './weather.service';

export const WEATHER_BOT: Bot = {
  name: 'weather',
  description: 'Responds with current weather in Cherkasy.'
};

registry.addBot(WEATHER_BOT, message$ => {
  return message$
    .mergeMap(currentWeather)
    .map(w => `${w.temp}C, ${w.humidity}%, ${w.description}`)
})
