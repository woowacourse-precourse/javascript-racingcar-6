import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      const carNames = await this.getCarNames();
      const numAttempts = await this.getNumAttempts();

      const carData = this.initializeCarData(carNames);

      for (let attempt = 0; attempt < numAttempts; attempt++) {
        this.performSingleRace(carData);
        this.printCurrentPositions(carData);
      }

      const winners = this.getWinners(carData);
      this.printWinners(winners);
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }

  async getCarNames() {
    MissionUtils.Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carNamesInput = await MissionUtils.Console.readLineAsync();
    const carNames = carNamesInput.split(",");
    this.validateCarNames(carNames);
    return carNames;
  }

  async getNumAttempts() {
    MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
    const numAttemptsInput = await MissionUtils.Console.readLineAsync();
    const numAttempts = parseInt(numAttemptsInput);
    this.validateNumAttempts(numAttempts);
    return numAttempts;
  }

  initializeCarData(carNames) {
    return carNames.map((name) => ({ name, position: 0 }));
  }

  performSingleRace(carData) {
    carData.forEach((car) => {
      const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomValue >= 4) {
        car.position += 1;
      }
    });
  }

  printCurrentPositions(carData) {
    carData.forEach((car) => {
      const positionIndicator = "-".repeat(car.position);
      MissionUtils.Console.print(`${car.name} : ${positionIndicator}`);
    });
  }

  getWinners(carData) {
    const maxPosition = Math.max(...carData.map((car) => car.position));
    const winners = carData.filter((car) => car.position === maxPosition).map((car) => car.name);
    return winners;
  }

  printWinners(winners) {
    const winnerMessage = `최종 우승자 : ${winners.join(", ")}`;
    MissionUtils.Console.print(winnerMessage);
  }

  validateCarNames(carNames) {
    if (!carNames.every((name) => name.length <= 5)) {
      throw new Error("[ERROR] 이름은 5자 이하만 가능합니다.");
    }
  }

  validateNumAttempts(numAttempts) {
    if (isNaN(numAttempts) || numAttempts <= 0) {
      throw new Error("[ERROR] 숫자가 잘못된 형식이거나 0보다 작습니다.");
    }
  }
}

export default App;
