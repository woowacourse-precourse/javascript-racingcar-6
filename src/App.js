import { Console, Random } from "@woowacourse/mission-utils";

const ERROR_HEADER = "[ERROR]";
class App {
  constructor() {
    this.racingCars = new Map();
  }

  async getRacingCars() {
    let inputRacingCars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return inputRacingCars.split(",");
  }

  async setRacingCars(racingCars) {
    for (let racingCar of racingCars) {
      this.racingCars.set(racingCar, "");
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
    const currPosition = this.racingCars.get(car);
    const nextPosition = currPosition + "-";
    this.racingCars.set(car, nextPosition);
  }

  tryTurn() {
    for (const car of this.racingCars.keys()) {
      let randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        this.moveForward(car);
      }
    }
  }

  playRacing(tryNumber) {
    Console.print("\n실행 결과");
    do {
      this.tryTurn();
      tryNumber--;
    } while (tryNumber > 0);
  }

  initPlay() {}

  async play() {
    this.initPlay();
    const racingCars = await this.getRacingCars();
    await this.setRacingCars(racingCars);
    const tryNumber = await this.getTryNumber();
    this.playRacing(tryNumber);
  }
}

export default App;
