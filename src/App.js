import { Console, Random } from "@woowacourse/mission-utils";

export const ERROR_HEADER = "[ERROR] ";
const numberCanMoveForward = 4;
const validCarNameLength = 5;
const newDistance = "-";

export const messageBeforeInput = Object.freeze({
  carNames: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  attempts: "시도할 횟수는 몇 회인가요?\n",
});
export const messagePrint = Object.freeze({
  start: "실행 결과",
  winners: "최종 우승자 : ",
});
export const messageError = Object.freeze({
  emptyValue: "빈 입력값입니다.",
  validCarName: "자동차 이름은 5자 이하만 가능합니다",
  validAttempts: "1이상의 수를 입력하세요.",
});

export const printWinnersMessage = (winners) => {
  Console.print(`${messagePrint.winners}${winners}`);
};
export const printStartMessage = () => {
  Console.print(messagePrint.start);
};
export const printAttemptResultMessage = (distance, car) => {
  Console.print(`${car} : ${distance}`);
};

class App {
  constructor() {
    this.cars = new Map();
    this.winners = [];
    this.numberOfAttempts = 0;
  }

  checkValidCarName(carsArr) {
    for (let carName of carsArr) {
      if (carName.length > validCarNameLength) {
        throw new Error(`${ERROR_HEADER}${messageError.validCarName}`);
      }
    }
  }

  async getCars() {
    let inputCars = await Console.readLineAsync(messageBeforeInput.carNames);
    if (!inputCars) {
      throw new Error(`${ERROR_HEADER}${messageError.emptyValue}`);
    }
    let carsArr = inputCars.split(",");
    this.checkValidCarName(carsArr);
    return carsArr;
  }

  async setCars(carArr) {
    for (let car of carArr) {
      this.cars.set(car, "");
    }
    console.log(this.cars);
  }

  checkValidNumberOfAttempts(numberOfAttempts) {
    if (isNaN(numberOfAttempts) || numberOfAttempts < 1) {
      throw new Error(`${ERROR_HEADER}${messageError.validAttempts}`);
    }
  }

  async getNumberOfAttempts() {
    let input = await Console.readLineAsync(messageBeforeInput.attempts);
    let numberOfAttempts = parseInt(input);
    this.checkValidNumberOfAttempts(numberOfAttempts);
    this.numberOfAttempts = numberOfAttempts;
    Console.print("");
  }

  moveCarForward(car) {
    const curDistance = this.cars.get(car);
    const nextDistance = curDistance + newDistance;
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

  printAttemptResult() {
    this.cars.forEach((curDistance, car) => {
      printAttemptResultMessage(curDistance, car);
    });
  }

  doAttemptCycle() {
    this.doAttempt();
    this.printAttemptResult();
    Console.print("");
    this.numberOfAttempts--;
  }

  startRace() {
    printStartMessage();
    do {
      this.doAttemptCycle();
    } while (this.numberOfAttempts > 0);
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
      if (distance.length === longestDistance) {
        this.winners.push(car);
      }
    });
  }

  printWinners() {
    const winners = this.winners.join(", ");
    printWinnersMessage(winners);
  }

  async play() {
    const carArr = await this.getCars();
    await this.setCars(carArr);
    await this.getNumberOfAttempts();
    this.startRace();
    this.selectWinners();
    this.printWinners();
  }
}

export default App;
