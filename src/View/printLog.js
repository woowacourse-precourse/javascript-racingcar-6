import { Console } from '@woowacourse/mission-utils';
import checkRandomNumber from '../Util/randomNumber.js';

const printLog = (carName) => {
  carName.forEach((moveLog, name) => {
    if (checkRandomNumber()) carName.set(name, moveLog + '-');
    Console.print(`${name} : ${carName.get(name)}`);
  });
  Console.print(' ');
};

export default printLog;
