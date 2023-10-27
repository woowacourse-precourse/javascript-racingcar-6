import { Random, Console } from "@woowacourse/mission-utils";
import {
  QUESTION_MESSAGES,
  PURPOSE_OF_QUESTION_MESSAGES,
} from "./constants/questionMessage.js";

class App {
  async play() {}

  async getUserInput(purpose) {
    if (purpose === PURPOSE_OF_QUESTION_MESSAGES.SET_CARS_NAME) {
      const cars = await Console.readLineAsync(
        QUESTION_MESSAGES.WHAT_IS_CARS_NAME
      );

      return cars.split(",");
    }

    if (purpose === PURPOSE_OF_QUESTION_MESSAGES.SET_LAPS) {
      const lap = await Console.readLineAsync(QUESTION_MESSAGES.HOW_MANY);

      return Number(lap);
    }
  }
}

export default App;

const app = new App();
app.play();
