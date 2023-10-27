import { checkErrorInputName, checkErrorPlayNumber } from './validation.js';

import { Console } from '@woowacourse/mission-utils';
import { INFO_MESSAGE } from './message.js';

const getPlayNumber = async () => {
  const inputNumber = Number(await Console.readLineAsync(INFO_MESSAGE.playNumber));
  checkErrorPlayNumber(inputNumber);
  return inputNumber;
};

const getCarName = async (carName) => {
  const inputNameArr = (await Console.readLineAsync(INFO_MESSAGE.carName)).split(',').map((name) => name.trim());
  checkErrorInputName(inputNameArr);
  inputNameArr.forEach((name) => carName.set(name, ''));
};

export { getPlayNumber, getCarName };
