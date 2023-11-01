const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  async play() {
    try {
      const inputCarNames = await Console.readLineAsync(
        "경주 할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );
      const carNames = inputCarNames.split(",");
      this.validateCarNames(carNames);

      const inputAttempts = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?"
      );
      const attempts = parseInt(inputAttempts, 10);

      if (isNaN(attempts) || attempts <= 0) {
        throw new Error("[ERROR] 시도 횟수는 양수여야 합니다.");
      }

      const raceResults = this.startRace(carNames, attempts);
      this.printResults(raceResults);

      const winners = this.getWinners(raceResults);
      this.printWinners(winners);
    } catch (error) {
      console.error(error.message);
    }
  }

  async getInput(prompt) {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question(`${prompt}\n`, (answer) => {
        resolve(answer);
        rl.close();
      });
    });
  }

  validateCarNames(carNames) {
    if (!carNames.every((name) => name.length <= 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }
  }

  startRace(carNames, attempts) {
    const raceResults = {};

    for (const carName of carNames) {
      raceResults[carName] = "-";
    }

    for (let i = 0; i < attempts; i++) {
      for (const carName of carNames) {
        const randomValue = Math.floor(Math.random() * 10);
        if (randomValue >= 4) {
          raceResults[carName] += "-";
        }
      }
    }

    return raceResults;
  }

  printResults(raceResults) {
    for (const carName in raceResults) {
      console.log(`${carName} : ${raceResults[carName]}`);
    }
  }

  getWinners(raceResults) {
    const maxDistance = Math.max(
      ...Object.values(raceResults).map((result) => result.length)
    );
    const winners = [];
    for (const carName in raceResults) {
      if (raceResults[carName].length === maxDistance) {
        winners.push(carName);
      }
    }
    return winners;
  }

  printWinners(winners) {
    console.log(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;

const app = new App();
app.play();
