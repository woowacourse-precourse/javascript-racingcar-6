import { checkErrorInputName, checkErrorPlayNumber } from './validation.js';

import { Console } from '@woowacourse/mission-utils';
import { INFO_MESSAGE } from './message.js';

const getPlayNumber = async () => {
  const inputNumber = +(await Console.readLineAsync(INFO_MESSAGE.playNumber));
  checkErrorPlayNumber(inputNumber);
  return inputNumber;
};

const getCarName = async () => {
  const inputNameArr = (await Console.readLineAsync(INFO_MESSAGE.carName)).split(',').map((name) => name.trim());
  checkErrorInputName(inputNameArr);
  return inputNameArr;
};

export { getPlayNumber, getCarName };
