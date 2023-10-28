import { MissionUtils } from '@woowacourse/mission-utils';
import { printInputCarNames, printInputAttemptNumber } from './print';
import {
  validateInputAttemptNumber,
  validateInputCarNames,
} from '../validations/validateInputUser';

const input = async (printString = '') => {
  const inputedValue = await MissionUtils.Console.readLineAsync(printString);

  return inputedValue;
};

const inputCarNames = async () => {
  printInputCarNames();
  const carNames = await input();
  validateInputCarNames(carNames);

  return carNames.split(',');
};

const inputAttemptNumber = async () => {
  printInputAttemptNumber();
  const attemptNumber = Number(await input());
  validateInputAttemptNumber(attemptNumber);

  return attemptNumber;
};

export { inputCarNames, inputAttemptNumber };
