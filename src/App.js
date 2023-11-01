import MissionUtils from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) {
      this.position += 1;
    }
  }

  getPosition() {
    return "-".repeat(this.position);
  }
}

class RacingGame {
  constructor(carNames, attempts) {
    this.cars = carNames.split(",").map((name) => new Car(name.trim()));
    this.attempts = attempts;
  }

  play() {
    for (let i = 0; i < this.attempts; i++) {
      this.cars.forEach((car) => car.move());
      this.printRaceStatus();
    }
    this.printWinners();
  }

  printRaceStatus() {
    this.cars.forEach((car) => {
      const position = car.getPosition();
      MissionUtils.Console.print(`${car.name} : ${position}`);
    });
    MissionUtils.Console.print("\n");
  }

  printWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    const winners = this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);

    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}\n`);
  }
}

class App {
  async play() {
    try {
      MissionUtils.Console.print(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const carNames = await MissionUtils.Console.readLineAsync();
      if (!carNames) {
        throw new Error("[ERROR] 자동차 이름을 입력하세요.");
      }

      MissionUtils.Console.print("시도할 횟수는 몇 회인가요?\n");
      const attempts = parseInt(await MissionUtils.Console.readLineAsync(), 10);
      if (isNaN(attempts)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      const game = new RacingGame(carNames, attempts);
      await game.play();
    } catch (error) {
      MissionUtils.Console.print(error.message + "\n");
    }
  }
}

export default App;
