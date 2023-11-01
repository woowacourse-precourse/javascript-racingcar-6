const { Random, Console } = require("@woowacourse/mission-utils");

class RacingCarGame {
  constructor() {
    this.cars = [];
    this.attempts = 0;
  }

  start() {
    this.getInput();
    this.runRace();
    this.determineWinner();
  }

  getInput() {
    this.cars = this.promptForCarNames();
    this.attempts = this.promptForAttempts();
  }

  promptForCarNames() {
    while (true) {
      Console.print(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,)로 구분): "
      );
      const input = Console.readLineAsync();
      const carNames = input.split(",").map((name) => name.trim());

      if (carNames.every((name) => name.length <= 5)) {
        return carNames;
      } else {
        Console.print("[ERROR] 자동차 이름은 5자 이하만 가능합니다.\n");
      }
    }
  }

  promptForAttempts() {
    while (true) {
      Console.print("시도할 횟수는 몇 회인가요?: ");
      const input = Console.readLineAsync();
      const attempts = parseInt(input);

      if (!isNaN(attempts) && attempts > 0) {
        return attempts;
      } else {
        Console.print("[ERROR] 올바른 횟수를 입력하세요.\n");
      }
    }
  }

  runRace() {
    for (let i = 0; i < this.attempts; i++) {
      this.cars.forEach((car) => {
        const move = Random.pickNumberInRange(0, 9);
        if (move >= 4) {
          car.position += 1;
        }
      });
      this.displayRaceProgress(i + 1);
    }
  }

  displayRaceProgress(attempt) {
    Console.print(`\n시도 ${attempt}\n`);
    this.cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}\n`);
    });
  }

  determineWinner() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    const winners = this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
    Console.print(`\n최종 우승자: ${winners.join(", ")}\n`);
  }
}

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }
}

class App {
  play() {
    const game = new RacingCarGame();
    game.start();
  }
}

const app = new App();
app.play();

export default App;
