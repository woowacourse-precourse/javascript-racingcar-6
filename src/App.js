import { Random, Console } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    if (Random.pickNumberInRange(0, 9) >= 4) {
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
    await this.inputCarNames();
    await this.inputRacingRound();

    Console.print("\n실행 결과");
    for (let i = 0; i < this.rounds; i++) {
      this.playRound();
      await this.displayRound();
    }

    await this.displayWinner();
  }

  async inputCarNames() {
    const names = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNames = names.split(",");

    if (carNames.some((name) => name.length > 5)) {
      throw new Error("[ERROR] 이름은 5자 이하만 가능합니다.");
    }

    this.cars = carNames.map((name) => new Car(name));
  }

  async inputRacingRound() {
    const rounds = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    if (isNaN(rounds)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    this.rounds = parseInt(rounds, 10);
  }

  playRound() {
    this.cars.forEach((car) => car.move());
  }

  async displayRound() {
    this.cars.forEach((car) => {
      Console.print(`${car.getName()} : ${"-".repeat(car.getPosition())}`);
    });
    Console.print("");
  }

  async displayWinner() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winners = this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());

    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
