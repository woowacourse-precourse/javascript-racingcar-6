import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES, PRINT_MESSAGES } from '../constants/Constants.js';
import { checkCarNameInput, checkTryNum } from './Validation.js';

export async function getCarNameList() {
  const carName = await Console.readLineAsync(INPUT_MESSAGES.inputCarName);
  checkCarNameInput(carName);
  return carName;
}

export async function getTryNum() {
  const tryNum = await Console.readLineAsync(INPUT_MESSAGES.inputTryNum);
  checkTryNum(tryNum);
  return tryNum;
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

export const printProgressResult = () => {
  Console.print(PRINT_MESSAGES.progressResult);
};
