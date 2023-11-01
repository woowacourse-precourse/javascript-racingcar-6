import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    this.position += 1;
  }
}

class Race {
  constructor(cars, attempts) {
    this.cars = cars;
    this.attempts = attempts;
  }

  play() {
    for (let i = 0; i < this.attempts; i++) {
      this.cars.forEach((car) => {
        if (Random.pickNumberInRange(0, 9) >= 4) {
          car.move();
        }
      });
      this.printRoundResult();
    }
    this.printWinners();
  }

  printRoundResult() {
    this.cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
    Console.print("");
  }

  printWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    const winners = this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name)
      .join(", ");
    Console.print(`최종 우승자: ${winners}`);
  }
}

class InputValidator {
  static validateCarNames(names) {
    if (!names || names.length === 0) {
      throw new Error("[ERROR] 자동차 이름을 입력해주세요.");
    }
    const invalidName = names.find(
      (name) => name.length === 0 || name.length > 5
    );
    if (invalidName) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.");
    }
  }

  static validateAttempts(attempts) {
    if (isNaN(attempts) || attempts <= 0) {
      throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.");
    }
  }
}

export default class App {
  async play() {
    try {
      const carNames = (
        await Console.readLineAsync(
          "자동차 이름을 입력하세요 (이름은 쉼표(,)로 구분):"
        )
      )
        .split(",")
        .map((name) => name.trim());
      InputValidator.validateCarNames(carNames);
      const cars = carNames.map((name) => new Car(name));

      const attempts = parseInt(
        await Console.readLineAsync("시도할 횟수는 몇회인가요?")
      );
      InputValidator.validateAttempts(attempts);

      const race = new Race(cars, attempts);
      race.play();
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
}

const app = new App();
app.play();
