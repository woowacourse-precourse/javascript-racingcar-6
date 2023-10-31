import { Console } from '@woowacourse/mission-utils';
import { INFO_MESSAGE } from './Util/message.js';
import checkRandomNumber from './Util/randomNumber.js';

const playGame = async (playNumber, carName) => {
  Console.print(INFO_MESSAGE.result);
  while (playNumber--) {
    for (const [name, moveLog] of carName) {
      if (checkRandomNumber()) carName.set(name, moveLog + '-');
      Console.print(`${name} : ${carName.get(name)}`);
    }
    Console.print(' ');
  }
};

export default playGame;
