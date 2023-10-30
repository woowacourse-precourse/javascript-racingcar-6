import printMessage from '../common/utils/messagePrinter.js';
import { LOG_MESSAGE, ERROR_MESSAGE } from '../common/utils/constants/message.js';
import { STRING } from '../common/utils/constants/value.js';

export const printResult = () => {
  printMessage(LOG_MESSAGE.SHOW_RESULT);
}

export const printCar = (name, distance) => {
  printMessage(`${name} : ${STRING.MOVE_FORWARD_DISTANCE.repeat(distance)}`);
}

export const printWinner = (winner) => {
  printMessage(`${LOG_MESSAGE.SHOW_WINNER}${winner.join(', ')}`);
}

export const printError = () => {
  printMessage(ERROR_MESSAGE);
}
