import { Console } from "@woowacourse/mission-utils";

import gameStart from "./print/gameStart.js";
import getRacingCar from "./input/racingCar/getRacingCar.js";
import askTryNumber from "./print/askTryNumber.js";
import getTryNumber from "./input/tryNumber/getTryNumber.js";
import currentRacingStateArray from "./print/currentRacingStateArray.js";
import sortArray from "./utils/sortArray.js";
import findWinner from "./utils/findWinner.js";
import announceWinner from "./print/announceWinner.js";

class App {
  async play() {
    gameStart();

    const car_name_string = await Console.readLineAsync("");
    let car_object_array = getRacingCar(car_name_string);

    askTryNumber();
    let try_number = await getTryNumber();

    Console.print("");
    while (try_number-- > 0) {
      car_object_array = currentRacingStateArray(car_object_array);
      Console.print("");
    }
    announceWinner(findWinner(sortArray(car_object_array)));
  }
}

export default App;
