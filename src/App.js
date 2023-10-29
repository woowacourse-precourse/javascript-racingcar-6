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

  async play() {
    const carNameInput = await this.getUserInput(
      PURPOSE_OF_QUESTION_MESSAGES.SET_CARS_NAME
    );

    this.validation(CAR_NAME, carNameInput);

    const allCars = carNameInput.split(",");

    const lapInput = await this.getUserInput(
      PURPOSE_OF_QUESTION_MESSAGES.SET_LAPS
    );

    this.validation(LAP_TIME, lapInput);

    let laps = Number(lapInput);

    this.setCarsRecordBoard(allCars);

    Console.print(`${"\n"}${NOW_RESULT}`);

    while (laps > 0) {
      for (let car of allCars) {
        const randomNumber = this.getRandomNumber(
          RANGE.START_NUM,
          RANGE.END_NUM
        );

        this.moveCar(car, this.checkCanMove(randomNumber));

        this.printCurrentResult(car);
      }

      Console.print("");

      laps--;
    }

    this.findWinner(allCars);

    this.printFinalResult();
  }

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

  validation(mode, input) {
    if (mode === CAR_NAME) {
      this.carNameCheck(input);
    } else if (mode === LAP_TIME) {
      this.lapTimeCheck(input);
    }
  }

  carNameCheck(carNameInput) {
    if (!carNameInput.includes(",")) {
      throw new Error("[ERROR] 컴마를 기준으로 구분해 주세요.");
    } else if (carNameInput.includes(" ")) {
      throw new Error("[ERROR] 공백은 포함할 수 없습니다.");
    }

    const carArr = carNameInput.split(",");

    for (let car of carArr) {
      if (car.length > 5) {
        throw new Error("[ERROR] 5자 이하로 입력해 주세요.");
      } else if (car.length === 0) {
        throw new Error("[ERROR] 컴마는 붙여서 사용할 수 없습니다.");
      }
    }
  }

  lapTimeCheck(lapInput) {
    if (!Number(lapInput)) {
      throw new Error("[ERROR] 숫자를 입력 해주세요.");
    } else if (Number(lapInput) < 1) {
      throw new Error("[ERROR] 1 이상의 수를 입력해 주세요.");
    } else if (lapInput.includes(" ")) {
      throw new Error("[ERROR] 공백은 입력할 수 없습니다.");
    } else if (lapInput.includes(".")) {
      throw new Error("[ERROR] . 은 포함할 수 없습니다.");
    }
  }
}

export default App;

// const app = new App();
// app.play();
