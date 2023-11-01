import { Console } from '@woowacourse/mission-utils';
import checkRandomNumber from '../Util/randomNumber.js';

const printLog = (carName) => {
  for (const [name, moveLog] of carName) {
    if (checkRandomNumber()) carName.set(name, moveLog + '-');
    Console.print(`${name} : ${carName.get(name)}`);
  }
  Console.print(' ');
};

export default printLog;
