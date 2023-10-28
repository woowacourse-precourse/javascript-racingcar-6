import { Random, Console } from "@woowacourse/mission-utils";

import { convertArrayToObject } from "./util/converter.js";
import InputView from "./view/inputView.js";

class App {
  async play() {
    // 게임 준비
    const racingCarNames = await InputView.readRacingCarNames();
    const attemptCount = await InputView.readAttemptCount();

    const carsObject = convertArrayToObject(racingCarNames);

    Console.print("\n실행 결과");
    let maxDistance = 0;
    for (let i = 0; i < attemptCount; i++) {
      Object.entries(carsObject).forEach(([carName, carDistance]) => {
        const randomNumber = Random.pickNumberInRange(0, 9);

        if (randomNumber >= 4) {
          carsObject[carName] = carDistance + 1;
        }

        maxDistance =
          carsObject[carName] > maxDistance ? carsObject[carName] : maxDistance;
      });

      Object.entries(carsObject).forEach(([carName, carDistance]) => {
        Console.print(`${carName} : ${"-".repeat(carDistance)}`);
      });
      Console.print("");
    }

    Console.print(
      `최종 우승자 : ${Object.entries(carsObject)
        .filter(([carName, carDistance]) => carDistance === maxDistance)
        .map(([carName, carDistance]) => carName)}`
    );
  }
}

export default App;
