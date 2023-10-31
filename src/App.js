import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor() {
    this.name = name;
    this.distance = 0;
  }

  move(randomGoNum) {
    if (randomGoNum >= 4) {
      this.distance++;
    }
  }

  getDistance() {
    return "-".repeat(this.distance);
  }
}

class App {
  constructor() {
    this.cars = [];
    this.numberOfAttempts = 0;
  }

  validateCarNames(carNames) {
    for (let i = 0; i < carNames.length; i++) {
      if (carNames[i].length === 0 || carNames[i].length > 5) {
        throw new Error(
          "[ERROR] 자동차 이름은 1자 이상 5자 이하이어야 합니다."
        );
      }
    }
  }

  async play() {
    const input = await MissionUtils.Console.readLineAsync(
      "경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분"
    );
    const carNames = input.split(",");
    this.validateCarNames(carNames);
    this.cars = carNames.map((name) => new Car(name));

    this.numberOfAttempts = Number(
      await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요")
    );
    if (isNaN(this.numberOfAttempts) || this.numberOfAttempts <= 0) {
      throw new Error("[ERROR] 올바른 횟수를 입력하세요.");
    }
  }

  getCarNames() {
    // 자동차 이름 입력 받기
    const input = MissionUtils.Console.readLineAsync(
      "경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분"
    );
    this.validateCarNames(carNames);
    this.carNames = input.split(",");
  }

  moveCars() {
    // 0에서 9사이 랜덤숫자를 생성해 자동차 이동하는 함수
    for (let i = 0; i < this.cars.length; i++) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      this.cars[i].move(randomNumber);
    }
  }

  moveCarsResult() {
    // 차 이동 결과 함수
    for (let i = 0; i < this.cars.length; i++) {
      const car = this.cars[i];
      MissionUtils.Console.print(`${car.name} : ${car.getDistance()}`);
    }
  }
}
