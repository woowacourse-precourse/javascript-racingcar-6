import { MissionUtils } from "@woowacourse/mission-utils";
import { carNameInput, gameNumberInput } from "./gameIntro.js";
import {
  carMoveText,
  carMoveEmptyArray
} from "./gameMain.js";
import {
  winnerMovelength,
  getWinnerCarArray,
  resultText,
} from "./gameEnd.js";

const Console = MissionUtils.Console;

async function game() {
  const carName = await carNameInput();
  const gameRound = await gameNumberInput();
  Console.print("");
  Console.print("실행 결과");
  const carMoveArray = carMoveEmptyArray(carName);
  for (let i = 0; i < gameRound; i++) {
    carMoveText(carName, carMoveArray);
    Console.print("");
  }
  const winnerLength = winnerMovelength(carMoveArray);
  const winnerCars = getWinnerCarArray(carName, carMoveArray, winnerLength);
  resultText(winnerCars);
}

export { game };