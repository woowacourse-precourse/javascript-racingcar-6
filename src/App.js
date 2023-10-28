import { Console } from "@woowacourse/mission-utils";

import INPUT_MESSAGE from "./constants/game.js";

class App {
  async play() {
    const inputRacingCars = await Console.readLineAsync(
      INPUT_MESSAGE.RACING_CARS
    );
  }
}

export default App;
