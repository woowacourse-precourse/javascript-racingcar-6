import { Console } from "@woowacourse/mission-utils";
import { GAME_MSG } from "./message";

export class RacingCar {
  startGame() {
    this.getCarsName();
  }

  getCarsName() {
    const carNames = Console.readLineAsync(GAME_MSG.GET_CARS_NAME);
  }

  endGame() {
    return;
  }
}
