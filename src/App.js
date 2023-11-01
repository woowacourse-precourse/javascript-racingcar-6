import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    this.position += 1;
  }

  shouldMove() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  getPosition() {
    return "-".repeat(this.position);
  }
}

class Race {
  constructor(cars) {
    this.cars = cars;
  }

  runRound() {
    this.cars.forEach((car) => {
      if (car.shouldMove()) {
        car.move();
      }
    });
  }

  run(times) {
    for (let i = 0; i < times; i++) {
      this.runRound();
      this.printRoundResult();
      Console.print("");
    }
  }

  printRoundResult() {
    this.cars.forEach((car) => {
      Console.print(`${car.name} : ${car.getPosition()}`);
    });
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    return this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }
}

class App {
  async play() {
    const carNames = (
      await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      )
    ).split(",");
    const cars = carNames.map((name) => {
      if (!name || name.length > 5 || typeof name !== "string") {
        throw new Error("[ERROR] 자동차 이름은 5글자 이하로 해주세요");
      }
      return new Car(name);
    });
    const times = Number(
      await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    );
    if (times <= 0) throw new Error("[ERROR] 1이상의 수를 입력해 주세요");
    const race = new Race(cars);
    Console.print("\n실행 결과");
    race.run(times);
    const winners = race.getWinners();
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
