import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      this.position += 1;
    }
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }
}

class App {
  constructor() {
    this.cars = [];
  }

  async play() {
    try {
      await this.getInput();
      this.race();
      this.displayWinner();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }

  async getInput() {
    const names = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const namesArr = names.split(",");
    if (
      namesArr.some(
        (name) => name.length > 5 || name.length === 0 || !name.trim()
      )
    ) {
      throw new Error("[ERROR] 자동차 이름은 1~5자 이하만 가능합니다.");
    }
    this.cars = namesArr.map((name) => new Car(name.trim()));
    this.rounds = parseInt(
      await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?"),
      10
    );
    if (isNaN(this.rounds)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  race() {
    MissionUtils.Console.print("\n실행 결과");
    for (let i = 0; i < this.rounds; i++) {
      this.cars.forEach((car) => car.move());
      this.displayCars();
    }
  }

  displayCars() {
    this.cars.forEach((car) => {
      MissionUtils.Console.print(
        `${car.getName()} : ${"-".repeat(car.getPosition())}`
      );
    });
    MissionUtils.Console.print("");
  }

  displayWinner() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winners = this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
