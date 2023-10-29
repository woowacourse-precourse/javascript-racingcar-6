import { Random } from "@woowacourse/mission-utils";

import { convertArrayToObject } from "./util/converter.js";
import InputView from "./view/inputView.js";
import OutputView from "./view/OutputView.js";

class App {
  async play() {
    // 게임 준비
    const racingCarNames = await InputView.readRacingCarNames();
    const attemptCount = await InputView.readAttemptCount();

    const carsObject = convertArrayToObject(racingCarNames);

    OutputView.printRacingStart();
    let maxDistance = 0;
    for (let i = 0; i < attemptCount; i++) {
      Object.entries(carsObject).forEach(([carName, carDistance]) => {
        const randomNumber = Random.pickNumberInRange(0, 9);

        if (randomNumber >= 4) {
          carsObject[carName] = carDistance + 1;
        }

        maxDistance =
          carsObject[carName] > maxDistance ? carsObject[carName] : maxDistance;

        OutputView.printCurrentRacingCar(carName, carsObject[carName]);
      });
      OutputView.printSpacing();
    }

    OutputView.printRacingFinalWinners(carsObject, maxDistance);
  }
}

export default App;
