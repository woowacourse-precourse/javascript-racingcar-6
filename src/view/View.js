import { Console } from '@woowacourse/mission-utils';
import { checkValidCarsName, checkValidNumber } from '../utils/Validation.js';
import { MESSAGE, SIGN } from '../constants/constants.js';

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
    Console.print(`${carName} : ${SIGN.DASH.repeat(distance)}`);
  }

  printWinners(winnerList) {
    Console.print(
      winnerList.join(SIGN.DECIMAL + SIGN.SPACE) + MESSAGE.RESULT_WINNER,
    );
  }

  printSpace() {
    Console.print(SIGN.EMPTY_SPACE);
  }
}

export default View;
