import { registry, Bot } from './bot';

export const ECHO_BOT: Bot = {
  name: 'echo',
  description: 'Repeats your message after 1 second delay.'
}

registry.addBot(ECHO_BOT, m => m.delay(1000));
