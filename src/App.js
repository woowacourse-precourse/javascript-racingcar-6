import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR, RACING } from "./Constant.js";

class App {
  constructor() {
    this.results = [];
  }

  async play() {
    await this.startRacing();
  }

  async startRacing() {
    Console.print(RACING.START);
    let inputCars = await Console.readLineAsync("");

    if (!inputCars) {
      throw new Error(ERROR.NOT_NAME);
    } else if (inputCars.includes(",")) {
      const carsArr = inputCars.split(",");
      await this.checkInputValidity(carsArr);
    } else {
      throw new Error(ERROR.ONE_NAME);
    }
  }

  async checkInputValidity(carsArr) {
    const invalidNames = carsArr.filter((car) => car.length > 5);

    if (invalidNames.length > 0) {
      throw new Error(ERROR.INVALID_NAME);
    } else {
      this.inputTrialNum(carsArr);
    }
  }

  async inputTrialNum(carsArr) {
    Console.print(RACING.TRIAL_NUM);
    const trialNum = await Console.readLineAsync("");

    if (Number(isNaN(trialNum))) {
      throw new Error(ERROR.NOT_NUMBER);
    } else if (Number(trialNum) == 0) {
      throw new Error(ERROR.INVALID_TRIAL);
    }

    this.createResultsState(carsArr);
    Console.print("");
    Console.print(RACING.RESULT);
    this.racingCars(carsArr, trialNum);
  }

  createResultsState(carsArr) {
    carsArr.forEach((car) => {
      this.results.push({ car, state: [] });
    });
  }

  racingCars(carsArr, trialNum) {
    for (let i = 0; i < trialNum; i++) {
      carsArr.forEach((car) => {
        this.calcResult(car);
      });
      this.printResults();
      Console.print("");
    }
    this.printWinner();
  }

  calcResult(car) {
    const condition = this.racingCondition();

    const addState = condition === "전진" ? "-" : "";

    const carName = this.results.find((result) => result.car === car);
    carName.state.push(addState);
  }

  racingCondition() {
    const random = Random.pickNumberInRange(0, 9);
    if (random >= 4) {
      return "전진";
    } else {
      return "정지";
    }
  }

  printResults() {
    this.results.forEach((result) => {
      const movements = result.state.join("");
      Console.print(`${result.car} : ${movements}`);
    });
  }

  printWinner() {
    const winners = [];

    let maxDistance = -1;
    this.results.forEach((result) => {
      if (result.state.toString().length > maxDistance) {
        maxDistance = result.state.toString().length;
      }
    });

    this.results.forEach((result) => {
      if (result.state.toString().length === maxDistance) {
        winners.push(result.car);
      }
    });

    Console.print(RACING.WINNER + winners.join(", "));
  }
}

export default App;
