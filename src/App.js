import { Random, Console } from "@woowacourse/mission-utils";
import {
  QUESTION_MESSAGES,
  PURPOSE_OF_QUESTION_MESSAGES,
} from "./constants/questionMessage.js";
import { RANGE } from "./constants/randomNumberRange.js";

class App {
  carsRecordBoard = {};

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

  getRandomNumber(start, end) {
    return Random.pickNumberInRange(start, end);
  }

  setCarsRecordBoard(cars) {
    for (let car of cars) {
      this.carsRecordBoard[car] = "";
    }
  }

  checkCanMove(randomNumber) {
    if (randomNumber >= 4) {
      return true;
    } else {
      return false;
    }
  }
}

export default App;

const app = new App();
app.play();
