import { Random, Console } from "@woowacourse/mission-utils";
import {
  QUESTION_MESSAGES,
  PURPOSE_OF_QUESTION_MESSAGES,
} from "./constants/questionMessage.js";
import { RANGE } from "./constants/randomNumberRange.js";
import { NOW_RESULT, FINAL_RESULT } from "./constants/playingMessages.js";
import { CAR_NAME, LAP_TIME } from "./constants/validationMode.js";

class App {
  carsRecordBoard = {};
  winner = [];

  async play() {}

  async getUserInput(purpose) {
    if (purpose === PURPOSE_OF_QUESTION_MESSAGES.SET_CARS_NAME) {
      const cars = await Console.readLineAsync(
        QUESTION_MESSAGES.WHAT_IS_CARS_NAME
      );

      return cars;
    }

    if (purpose === PURPOSE_OF_QUESTION_MESSAGES.SET_LAPS) {
      const lap = await Console.readLineAsync(QUESTION_MESSAGES.HOW_MANY);

      return lap;
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

  moveCar(car, flag) {
    if (flag) {
      this.carsRecordBoard[car] += "-";
    }
  }

  printCurrentResult(car) {
    Console.print(`${car} : ${this.carsRecordBoard[car]}`);
  }

  findWinner(cars) {
    let winnerCount = 0;

    for (let car of cars) {
      winnerCount = Math.max(winnerCount, this.carsRecordBoard[car].length);
    }

    for (let car of cars) {
      if (this.carsRecordBoard[car].length === winnerCount) {
        this.winner.push(car);
      }
    }
  }

  printFinalResult() {
    if (this.winner.length === 1) {
      Console.print(`${FINAL_RESULT} : ${this.winner.toString()}`);
    } else {
      Console.print(`${FINAL_RESULT} : ${this.winner.join(", ")}`);
    }
  }
}

export default App;

const app = new App();
app.play();
