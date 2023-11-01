import { Console } from "@woowacourse/mission-utils";
import { carToMap, currentMatchResults } from "./carUtils";
import {getUserData} from "./userInput";
import { MESSAGES } from "./messages";
import { winners } from "./resultUtils";

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
