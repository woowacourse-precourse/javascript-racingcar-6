import { printMessage } from '../common/utils.js';
import { GAME_SETTING, LOG_MESSAGE, ERROR_MESSAGE } from '../common/constants.js';

export const printResult = () => {
  printMessage(LOG_MESSAGE.OUTPUT_RESULT);
}

export const printCar = (name, position) => {
  printMessage(`${name} : ${GAME_SETTING.MOVE_FORWARD_POSITION.repeat(position)}`);
}

export const printWinner = (winner) => {
  printMessage(`${LOG_MESSAGE.OUTPUT_WINNER}${winner.join(', ')}`);
}

export const printError = () => {
  printMessage(ERROR_MESSAGE);
}
