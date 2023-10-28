import { Console, Random } from "@woowacourse/mission-utils";

const ERROR_HEADER = "[ERROR]";
class App {
  constructor() {
    this.cars = new Map();
  }

  async getCars() {
    let inputCars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return inputCars.split(",");
  }

  async setCars(cars) {
    for (let car of cars) {
      this.cars.set(car, "");
    }
  }

  async getTryNumber() {
    let input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    let inputTryNumber = parseInt(input);
    if (isNaN(inputTryNumber) || inputTryNumber < 1) {
      throw new Error(`${ERROR_HEADER} 1이상의 수를 입력하세요.`);
    }
    return inputTryNumber;
  }

  moveForward(car) {
    const currPosition = this.cars.get(car);
    const nextPosition = currPosition + "-";
    this.cars.set(car, nextPosition);
  }

  tryTurn() {
    for (const car of this.cars.keys()) {
      let randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        this.moveForward(car);
      }
    }
  }

  printTurnResult() {
    this.cars.forEach((currPosition, car) => {
      Console.print(`${car} : ${currPosition}`);
    });
  }

  startRacing(tryNumber) {
    Console.print("\n실행 결과");
    do {
      this.tryTurn();
      this.printTurnResult();
      Console.print("\n");
      tryNumber--;
    } while (tryNumber > 0);
  }

  initPlay() {}

  async play() {
    this.initPlay();
    const cars = await this.getCars();
    await this.setCars(cars);
    const tryNumber = await this.getTryNumber();
    this.startRacing(tryNumber);
  }
}

export default App;
