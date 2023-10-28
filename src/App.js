import { Console, MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
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

class Race {
  constructor(carNames, round) {
    this.cars = carNames.map((name) => new Car(name));
    this.round = round;
  }

  playRound() {
    this.cars.forEach((car) => {
      car.move();
      Console.print(`${car.getName()} : ${"-".repeat(car.getPosition())}`);
    });
  }

  playGame() {
    for (let i = 0; i < this.round; i++) {
      this.playRound();
    }
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winners = this.cars.filter(
      (car) => car.getPosition() === maxPosition
    );
    return winners.map((car) => car.getName());
  }
}

class App {
  async play() {
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요."
    );
    const roundInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );

    if (!carNamesInput || !roundInput) {
      throw new Error("[ERROR] 입력 값이 유효하지 않습니다.");
    }

    const carNames = carNamesInput.split(",");
    const round = parseInt(roundInput, 10);

    if (isNaN(round)) {
      throw new Error("[ERROR] 시도 횟수는 유효한 숫자여야 합니다.");
    }

    const race = new Race(carNames, round);
    race.playGame();
    const winners = race.getWinners();

    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
