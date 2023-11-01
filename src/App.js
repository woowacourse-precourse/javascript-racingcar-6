import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR, GAME } from "../src/pages/text.js";
import {
  inputRacingCar,
  inputTryNumber,
  isGo,
  whoIsWinner,
  printResult,
} from "./pages/modules.js";

class App {
  async play() {
    const CARS = await inputRacingCar();
    let TRYS = await inputTryNumber();
    MissionUtils.Console.print(GAME.result);
    while (TRYS--) {
      CARS.forEach((car) => {
        if (isGo()) car.go++;
      });
      printResult(CARS);
    }
    const winner = whoIsWinner(CARS);
    MissionUtils.Console.print(GAME.end + winner);
  }
}

export default App;
