import { Console } from '@woowacourse/mission-utils';
import { validateCarNames, validateTryCount } from './Validation.js';
import { INPUT } from '../constants/MESSAGE.js';

const getCarNames = async () => {
  const userInput = await Console.readLineAsync(`${INPUT.CAR_NAME}\n`);
  const carNames = userInput.split(',');
  validateCarNames(carNames);

  return carNames;
};

const getTryCount = async () => {
  const tryCount = await Console.readLineAsync(`${INPUT.TRY_COUNT}\n`);
  validateTryCount(tryCount);
  Console.print('');
  return Number(tryCount);
};

export { getCarNames, getTryCount };
