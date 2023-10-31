/* eslint-disable import/extensions */
import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../Util/Message.js';

function printRacingCar(racingCarList) {
  racingCarList.forEach(carObject => {
    Console.print(GAME_MESSAGE.OUTPUT_CARRACING_MOVE(carObject.carName, carObject.moveCount));
  });
  Console.print('');
}

function printMessage(message) {
  Console.print(message);
}

function printWinnerRacingCarName(winnerCarName) {
  Console.print(GAME_MESSAGE.OUTPUT_WINNERCARNAME(winnerCarName));
}

export { printRacingCar, printMessage, printWinnerRacingCarName };
