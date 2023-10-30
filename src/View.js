import { Console } from '@woowacourse/mission-utils';
import { checkValidCarsName, checkValidNumber } from './Validation.js';
import { Message, Sign } from './constants/constants.js';

class View {
  async inputCarNames() {
    const input = await Console.readLineAsync(Message.NAME_INPUT);
    const inputList = input.split(Sign.DECIMAL);
    checkValidCarsName(inputList);
    return inputList;
  }

  async inputRepeatNumber() {
    const input = await Console.readLineAsync(Message.NUMBER_INPUT);
    checkValidNumber(input);
    return Number(input);
  }

  printCarResult(carName, distance) {
    Console.print(Message.RESULT_DISTANCE(carName,distance));
  }

  printWinners(winnerList) {
    Console.print(Message.RESULT_WINNER(winnerList));
  }
}

export default View;
