import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class CarRacingGame {

  constructor() {
    this.cars = [];
    this.attempts = '';
    this.raceResult = [];
  }


  async start() {
    await this.getCarNames();
    await this.getNumberOfAttempts();
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
    return carNamesArray.some(carName => {
      return carName.length > 5 || carName.length === 0;
    });
  }


  async getNumberOfAttempts() {
    try {
      const inputAttempts = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

      if (this.validateAttempts(inputAttempts)) {
        throw new Error("[ERROR] 잘못된 시도 횟수 입력입니다.");
      }

      this.attempts = parseInt(inputAttempts, 10);

    } catch (error) {
      throw error;
    }
  }


  validateAttempts(attempts) {
    for (let i = 0; i < attempts.length; i++) {
      let char = attempts.charAt(i)
      let ascii = char.charCodeAt()
      if ('1'.charCodeAt() <= ascii && ascii <= '9'.charCodeAt()) {
        continue;
      }
      return true;
    }
    return false;
  }

  printRaceProgress(car, index) {
    if (car.decideCarAction()) {
      this.raceResult[index] += 1;
    }
    Console.print(`${car.carName} : ${'-'.repeat(this.raceResult[index])}`);
  }

}

export default CarRacingGame
