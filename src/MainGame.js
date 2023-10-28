import { Console } from '@woowacourse/mission-utils';
import { Message } from './Message.js';

class MainGame {
  start = () => {
    Console.print(Message.INPUT_CAR_NAME);
  };
}

export { MainGame };
