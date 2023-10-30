import { Console } from '@woowacourse/mission-utils';
import { checkValidCarsName, checkValidNumber } from './Validation.js';
import { MESSAGE, SIGN } from './constants/constants.js';

class View {
  async inputCarNames() {
    const input = await Console.readLineAsync(MESSAGE.NAME_INPUT);
    const inputList = input.split(SIGN.DECIMAL);
    checkValidCarsName(inputList);
    return inputList;
  }

  async inputRepeatNumber() {
    const input = await Console.readLineAsync(MESSAGE.NUMBER_INPUT);
    checkValidNumber(input);
    return Number(input);
  }

  printCarResult(carName, distance) {
    Console.print(MESSAGE.RESULT_DISTANCE(carName, distance));
  }

  printWinners(winnerList) {
    Console.print(MESSAGE.RESULT_WINNER(winnerList));
  }
}

export default View;
