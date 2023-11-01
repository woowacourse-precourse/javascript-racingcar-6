import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class CarRacingGame {

  constructor() {
    this.cars = [];
    this.attempts = '';
    this.raceResult = [];
    this.raceWinner = [];
  }


  async start() {
    await this.getCarNames();
    const attempt = await this.getNumberOfAttempts();
    this.attempts = parseInt(attempt, 10);

    while (this.raceResult.length < this.cars.length) {
      this.raceResult.push(0);
    }

    for (let i = 0; i < this.attempts; i++) {
      for (let j = 0; j < this.cars.length; j++) {
        this.printRaceProgress(this.cars[j], j);
      }
      Console.print('\n');
    }

    this.raceWinner = this.determineRaceWinner(this.raceResult);
    Console.print(`최종 우승자 : ${this.raceWinner.join(",")}`);
  }


  async getCarNames() {
    try {
      const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      if (carNames === '') {
        throw new Error("[ERROR] 잘못된 자동차 이름 입력입니다.");
      }

      const carNamesArray = carNames.split(",");
      if (this.validateCarNames(carNamesArray)) {
        throw new Error("[ERROR] 잘못된 자동차 이름 입력입니다.");
      }
      if (carNamesArray.length < 2) {
        throw new Error("[ERROR] 자동차가 1개 입니다");
      }

      for (let i = 0; i < carNamesArray.length; i++) {
        this.cars.push(new Car(carNamesArray[i]));
      }

    } catch (error) {
      throw error;
    }
  }


  validateCarNames(carNamesArray) {
    return carNamesArray.some(carName => carName.length > 5 || carName.length === 0);
  }


  async getNumberOfAttempts() {
    try {
      const inputAttempts = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

      if (this.validateAttempts(inputAttempts)) {
        throw new Error("[ERROR] 잘못된 시도 횟수 입력입니다.");
      }

      return inputAttempts;
      

    } catch (error) {
      throw error;
    }
  }


  validateAttempts(attempts) {
    const parsedAttempts = Number(attempts);
    return !(Number.isInteger(parsedAttempts) && parsedAttempts > 0)
  }

  printRaceProgress(car, index) {
    if (car.decideCarAction()) {
      this.raceResult[index] += 1;
    }
    Console.print(`${car.carName} : ${'-'.repeat(this.raceResult[index])}`);
  }

  determineRaceWinner(raceResult) {
    const raceWinner = [];
    const maxDistance = Math.max(...raceResult);

    raceResult.forEach((element, index) => {
      if (element === maxDistance) {
        raceWinner.push(this.cars[index].carName);
      }
    });

    return raceWinner;
  }

}

export default CarRacingGame
