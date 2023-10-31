import { MissionUtils } from "@woowacourse/mission-utils";
class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) {
      this.position += 1;
    }
  }

  toString() {
    return `${this.name} : ${"-".repeat(this.position + 1)}`;
  }
}

class RacingGame {
  constructor(names, rounds) {
    this.names = names;
    this.rounds = rounds;
    this.cars = this.names.map((name) => new Car(name));
  }

  playRound() {
    this.cars.forEach((car) => car.move());
  }

  playGame() {
    for (let i = 0; i < this.rounds; i++) {
      this.playRound();
      this.cars.forEach((car) => MissionUtils.Console.print(car.toString()));
    }
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    const winners = this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
    return winners.join(", ");
  }
}

class App {
  async play() {
    try {
      const names = await this.getNames();
      const rounds = await this.getRounds();
      const game = new RacingGame(names, rounds);
      game.playGame();
      MissionUtils.Console.print(game.getWinners());
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }

  async getNames() {
    const names = (await this.readLineAsync("자동차 이름을 입력하세요.")).split(
      ","
    );
    if (names.some((name) => name.length > 5)) {
      throw new Error("자동차 이름은 5자 이하만 가능합니다.");
    }
    return names;
  }

  async getRounds() {
    const rounds = parseInt(
      await this.readLineAsync("라운드 횟수를 입력하세요."),
      10
    );
    if (isNaN(rounds) || rounds <= 0) {
      throw new Error("라운드 횟수는 1 이상의 숫자여야 합니다.");
    }
    return rounds;
  }

  async readLineAsync(message) {
    return new Promise((resolve) => {
      const readline = require("readline");
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question(message, (answer) => {
        resolve(answer);
        rl.close();
      });
    });
  }
}

export default App;
