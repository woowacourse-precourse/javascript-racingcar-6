import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./messages.js";
import { getUserData } from "./userInput.js";
import { carToMap, currentMatchResults } from "./carUtils.js";
import { winners } from "./resultUtils.js";

class App {
  async play() {
    const CAR_NAMES = await getUserData(MESSAGES.CAR);
    const carMap = new Map();
    let highestScore = 0;

    carToMap(CAR_NAMES, carMap);

    const USER_NUMBER = await getUserData(MESSAGES.NUM);
    Console.print('');

    Console.print(MESSAGES.RESULT);
    for (let i = 0; i < USER_NUMBER; i++) {
      highestScore = currentMatchResults(carMap);
    }

    winners(carMap, highestScore);
  }
}

export default App;
