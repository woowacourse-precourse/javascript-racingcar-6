import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR, GAME } from "../src/pages/text.js";

import inputRacingCar from "../src/components/inputRacingCar.js";
import inputTryNumber from "./components/inputTryNumber.js";
import isGo from "./components/IsGo.js";
import whoIsWinner from "./components/whoIsWinner.js";
import printResult from "./components/printResult.js";

class App {
  async play() {
    const CARS = await inputRacingCar();
    let TRYS = await inputTryNumber();
    MissionUtils.Console.print("실행 결과\n");
    while (TRYS--) {
      CARS.forEach((car) => {
        if (isGo()) car.go++;
      });
      printResult(CARS);
    }
    const winner = whoIsWinner(CARS);
    MissionUtils.Console.print(GAME.END + winner);
  }
}

export default App;
