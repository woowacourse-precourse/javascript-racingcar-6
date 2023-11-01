import { MissionUtils } from "@woowacourse/mission-utils";

const CAR_NAME_MESSAGE =
  "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
const ATTEMP_COUNT_MESSAGE = "시도할 횟수는 몇 회인가요?\n";
const WINNER_MESSAGE = "최종 우승자 : ";

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomValue > 3) {
      this.distance++;
    }
  }

  displayDistance() {
    return this.name + " : " + "-".repeat(this.distance);
  }
}

class App {
  async play() {
    await this.#controller();
  }

  async #controller() {
    const carNames = await this.#readCarNames();
    const cars = carNames.map((car) => new Car(car.trim()));
    const attempCount = await this.#readAttempCount();
    await this.#race(cars, attempCount);
  }

  async #readCarNames() {
    const cars = await MissionUtils.Console.readLineAsync(CAR_NAME_MESSAGE);
    return cars.trim().split(",");
  }

  async #readAttempCount() {
    const result =
      await MissionUtils.Console.readLineAsync(ATTEMP_COUNT_MESSAGE);
    return result.trim();
  }

  async #race(cars, attemptCount) {
    MissionUtils.Console.print("\n실행 결과");
    for (let i = 0; i < attemptCount; i++) {
      cars.forEach((car) => car.move());
      cars.forEach((car) => MissionUtils.Console.print(car.displayDistance()));
      MissionUtils.Console.print(" ");
    }
    await this.#displayWinner(cars);
  }

  #displayWinner(cars) {
    const maxDistance = Math.max(...cars.map((car) => car.distance));
    const winner = cars
      .filter((car) => car.distance === maxDistance)
      .map((car) => car.name);
    MissionUtils.Console.print(WINNER_MESSAGE + winner.join(", "));
  }
}

export default App;
