import { Console } from '@woowacourse/mission-utils';
import { validateCarNames, validateTryCount } from './Validation.js';
import { INPUT } from '../constants/MESSAGE.js';

//자동차 이름 입력받기
const getCarNames = async () => {
  const userInput = await Console.readLineAsync(`${INPUT.CAR_NAME}\n`);
  const carNames = userInput.split(',');
  validateCarNames(carNames);

  return carNames;
};

//시도 횟수 입력받기
const getTryCount = async () => {
  const tryCount = await Console.readLineAsync(`${INPUT.TRY_COUNT}\n`);
  validateTryCount(tryCount);
  Console.print('');
  return Number(tryCount);
};

export { getCarNames, getTryCount };
