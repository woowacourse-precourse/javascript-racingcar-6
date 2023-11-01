import { Console } from '@woowacourse/mission-utils';
import { checkCarNameInput, checkTryNum } from './Validation.js';
import { INPUT_MESSAGES, PRINT_MESSAGES } from '../constant/Constants.js';

export async function getCarNameList() {
  const carName = await Console.readLineAsync(INPUT_MESSAGES.inputCarName);
  checkCarNameInput(carName);
  return carName.split(',');
}

export async function getTryNum() {
  const tryNum = await Console.readLineAsync(INPUT_MESSAGES.inputTryNum);
  checkTryNum(tryNum);
  return Number(tryNum);
}

export const printProgressProcess = (name, progress) => {
  Console.print(
    PRINT_MESSAGES.progressProcess(
      name,
      PRINT_MESSAGES.forward.repeat(progress),
    ),
  );
};

export const printWinnerList = (winnerList) => {
  Console.print(PRINT_MESSAGES.winnerList(winnerList));
};

export const printExecutionResult = () => {
  Console.print(PRINT_MESSAGES.executionResult);
};

export const printEmptyLine = () => {
  Console.print('');
};
