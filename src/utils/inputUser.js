import { MissionUtils } from '@woowacourse/mission-utils';
import {
  validateInputAttemptNumber,
  validateInputCarNames,
} from '../validations/validateInputUser';

const input = async (printString = '') => {
  const inputedValue = await MissionUtils.Console.readLineAsync(printString);

  return inputedValue;
};

const inputCarNames = async () => {
  const carNames = await input();
  validateInputCarNames(carNames);

  return carNames.split(',');
};

const inputAttemptNumber = async () => {
  const attemptNumber = Number(await input());
  validateInputAttemptNumber(attemptNumber);

  return attemptNumber;
};

export { inputCarNames, inputAttemptNumber };
