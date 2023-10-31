import { MissionUtils } from "@woowacourse/mission-utils";
class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move(randomNumber) {
    if (randomNumber >= 4) {
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
    this.totalRounds = 0;
  }

  validateNames(names) {
    for (let i = 0; i < names.length; i++) {
      if (names[i].length === 0 || names[i].length > 5) {
        throw new Error(
          "[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다."
        );
      }
    }
  }

  async play() {
    const carNames = (
      await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      )
    ).split(",");
    this.validateNames(carNames);
    this.cars = carNames.map((name) => new Car(name));

    this.totalRounds = Number(
      await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?")
    );
    if (isNaN(this.totalRounds)) {
      throw new Error("[ERROR] 시도할 횟수는 숫자여야 합니다.");
    }

    MissionUtils.Console.print("\n실행 결과");
    for (let i = 0; i < this.totalRounds; i++) {
      this.round();
      this.roundResult();
    }

    this.winner();
  }
  round() {
    for (let i = 0; i < this.cars.length; i++) {
      const randomDistance = MissionUtils.Random.pickNumberInRange(0, 9);
      this.cars[i].move(randomDistance);
    }
  }

  roundResult() {
    for (let i = 0; i < this.cars.length; i++) {
      const car = this.cars[i];
      MissionUtils.Console.print(`${car.name} : ${car.getDistance()}`);
    }
    MissionUtils.Console.print("");
  }

  getWinners() {
    let maxDistance = 0;
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].distance > maxDistance) {
        maxDistance = this.cars[i].distance;
      }
    }

    let winners = [];
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].distance === maxDistance) {
        winners.push(this.cars[i].name);
      }
    }

    return winners;
  }

  winner() {
    const winners = this.getWinners();
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
