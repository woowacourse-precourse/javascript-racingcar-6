import { Console } from "@woowacourse/mission-utils";

import startGame from "./print/startGame.js";
import getRacingCar from "./input/racingCar/getRacingCar.js";
import askTryNumber from "./print/askTryNumber.js";
import getTryNumber from "./input/tryNumber/getTryNumber.js";
import announceCurrentRacingState from "./print/announceCurrentRacingState.js";
import sortArray from "./utils/sortArray.js";
import findWinner from "./utils/findWinner.js";
import announceWinner from "./print/announceWinner.js";

class App {
  async play() {
    startGame();
    let carObjectArray = await getRacingCar();

    askTryNumber();
    let tryNumber = await getTryNumber();

    Console.print("");
    while (tryNumber > 0) {
      carObjectArray = announceCurrentRacingState(carObjectArray);
      Console.print("");
      tryNumber -= 1;
    }
    announceWinner(findWinner(sortArray(carObjectArray)));
  }
}

export default App;
