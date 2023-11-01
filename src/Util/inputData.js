import { checkErrorInputName, checkErrorPlayNumber } from './validation.js';

import { MissionUtils } from '@woowacourse/mission-utils';
import { INFO_MESSAGE } from './message.js';

const getCarName = async () => {
  const inputNameArr = (await MissionUtils.Console.readLineAsync(INFO_MESSAGE.carName)).split(',').map((name) => name.trim());
  checkErrorInputName(inputNameArr);
  const carName = new Map();
  inputNameArr.forEach((name) => carName.set(name, ''));
  return carName;
};

const getPlayNumber = async () => {
  const inputNumber = +(await MissionUtils.Console.readLineAsync(INFO_MESSAGE.playNumber));
  checkErrorPlayNumber(inputNumber);
  return inputNumber;
};

export { getCarName, getPlayNumber };
