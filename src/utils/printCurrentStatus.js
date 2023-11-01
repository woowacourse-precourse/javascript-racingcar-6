import messagePrinter from './messagePrinter.js';
import GAME_MESSAGE from '../constants/gameMessage.js';

const printCurrentStatus = (carNameArr, curMoveForwardArr) => {
  for (let i = 0; i < carNameArr.length; i += 1) {
    const carName = carNameArr[i];
    const curMoveForward = curMoveForwardArr[i];
    messagePrinter.outputPrint(GAME_MESSAGE.print_move_status(carName, curMoveForward));
  }
  messagePrinter.outputPrint(GAME_MESSAGE.line_break);
};

export default printCurrentStatus;
