import { Console } from '@woowacourse/mission-utils';
import { INFO_MESSAGE } from './Util/message.js';
import printLog from './View/printLog.js';

const playGame = async (playNumber, carName) => {
  Console.print(INFO_MESSAGE.result);
  while (playNumber--) printLog(carName);
};

export default playGame;
