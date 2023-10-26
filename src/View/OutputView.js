import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../Util/Message.js";

function printRacingCar(racingCarList){
  racingCarList.forEach((carObject) => {
    const carName = Object.keys(carObject)[0];
    Console.print(GAME_MESSAGE.OUTPUT_CARRACING(carName, carObject[carName]))
  })
  Console.print('');
}

function printMessage(message){
  Console.print(message);
}

function printWinnerRacingCarName(winnerCarName){
  Console.print(GAME_MESSAGE.OUTPUT_WINNERCARNAME(winnerCarName));
}

export { printRacingCar, printMessage, printWinnerRacingCarName }