import { Console, Random } from "@woowacourse/mission-utils";

const ERROR_HEADER = "[ERROR] ";
const numberCanMoveForward = 4;

export const meassageBeforeInput = Object.freeze({
  carNames: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  attempts: "시도할 횟수는 몇 회인가요?\n",
});
export const messagePrint = Object.freeze({
  result: "\n실행 결과",
  winners: "최종 우승자 : ",
});
export const messageError = Object.freeze({
  validAttempts: "1이상의 수를 입력하세요.",
});

class App {
  constructor() {
    this.cars = new Map();
    this.winners = [];
  }

  async getCars() {
    let inputCars = await Console.readLineAsync(meassageBeforeInput.carNames);
    return inputCars.split(",");
  }

  async setCars(carArr) {
    for (let car of carArr) {
      this.cars.set(car, "");
    }
  }

  isValidNumberOfAttempts(numberOfAttempts) {
    if (isNaN(numberOfAttempts) || numberOfAttempts < 1) {
      throw new Error(`${ERROR_HEADER}${messageError.validAttempts}`);
    }
  }

  async getNumberOfAttempts() {
    let input = await Console.readLineAsync(meassageBeforeInput.attempts);
    let numberOfAttempts = parseInt(input);
    this.isValidNumberOfAttempts(numberOfAttempts);
    return numberOfAttempts;
  }

  moveCarForward(car) {
    const curDistance = this.cars.get(car);
    const nextDistance = curDistance + "-";
    this.cars.set(car, nextDistance);
  }

  doAttempt() {
    for (let car of this.cars.keys()) {
      let randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= numberCanMoveForward) {
        this.moveCarForward(car);
      }
    }
  }

  printTurnResult() {
    this.cars.forEach((curDistance, car) => {
      Console.print(`${car} : ${curDistance}`);
    });
  }

  startRace(numberOfAttempts) {
    Console.print(messagePrint.result);
    do {
      this.doAttempt();
      this.printTurnResult();
      Console.print("");
      numberOfAttempts--;
    } while (numberOfAttempts > 0);
  }

  getLongestDistance() {
    let longestDistance = 0;
    for (let distance of this.cars.values()) {
      if (distance.length >= longestDistance) {
        longestDistance = distance.length;
      }
    }
    return longestDistance;
  }

  selectWinners() {
    const longestDistance = this.getLongestDistance();
    this.cars.forEach((distance, car) => {
      if (distance === longestDistance) {
        this.winners.push(car);
      }
    });
  }

  printWinners() {
    const winners = this.winners.join(", ");
    Console.print(`${messagePrint.winners}${winners}`);
  }

  async play() {
    const carArr = await this.getCars();
    await this.setCars(carArr);
    const numberOfAttempts = await this.getNumberOfAttempts();
    this.startRace(numberOfAttempts);
    this.selectWinners();
    this.printWinners();
  }
}

export default App;
