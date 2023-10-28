import { Console, Random } from "@woowacourse/mission-utils";

const ERROR_HEADER = "[ERROR]";
class App {
  constructor() {
    this.cars = new Map();
    this.winners = [];
  }

  async getCars() {
    let inputCars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return inputCars.split(",");
  }

  async setCars(carArr) {
    for (let car of carArr) {
      this.cars.set(car, "");
    }
  }

  async getNumberOfAttempts() {
    let input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    let numberOfAttempts = parseInt(input);
    if (isNaN(numberOfAttempts) || numberOfAttempts < 1) {
      throw new Error(`${ERROR_HEADER} 1이상의 수를 입력하세요.`);
    }
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
      if (randomNum >= 4) {
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
    Console.print("\n실행 결과");
    do {
      this.doAttempt();
      this.printTurnResult();
      Console.print("");
      numberOfAttempts--;
    } while (numberOfAttempts > 0);
  }

  getLongestDistance() {
    let winnerDistance = 0;
    for (let distance of this.cars.values()) {
      if (distance.length >= winnerDistance) {
        winnerDistance = distance.length;
      }
    }
    return winnerDistance;
  }

  selectWinners() {
    const winnerDistance = this.getLongestDistance();
    this.cars.forEach((distance, car) => {
      if (distance.length === winnerDistance) {
        this.winners.push(car);
      }
    });
  }

  printWinners() {
    const winners = this.winners.join(", ");
    Console.print(`최종 우승자 : ${winners}`);
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
