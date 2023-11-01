import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    await this.startGame();
  }

  async startGame() {
    const carNames = await this.inputCarNames();
    const tries = await this.inputTries();
    const cars = this.initializeCars(carNames);
    this.startRace(cars, tries);
  }

  async inputCarNames() {
    const carsInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉽표(,) 기준으로 구분) \n"
    );
    const carNames = carsInput.split(",").map((name) => name.trim());
    if (!this.validateCarNames(carNames)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }
    return carNames;
  }

  validateCarNames(names) {
    return names.every((name) => name.length <= 5);
  }

  async inputTries() {
    const triesInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? \n"
    );
    const tries = parseInt(triesInput, 10);
    if (isNaN(tries) || tries <= 0) {
      throw new Error("[ERROR] 시도 횟수는 양수여야 합니다.");
    }
    return tries;
  }

  initializeCars(names) {
    return names.map((name) => ({ name, position: 0 }));
  }

  startRace(cars, tries) {
    for (let i = 0; i < tries; i++) {
      this.moveCars(cars);
      this.displayMovement(cars);
    }
    const winners = this.determineWinners(cars);
    this.printResult(winners);
  }

  moveCars(cars) {
    cars.forEach((car) => {
      const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        car.position++;
      }
    });
  }

  displayMovement(cars) {
    cars.forEach((car) => {
      const repeat = "-".repeat(car.position);
      Console.print(`${car.name} : ${repeat}`);
    });
  }

  determineWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars.filter((car) => car.position === maxPosition);
    return winners;
  }

  printResult(winners) {
    const winnerNames = winners.map((car) => car.name).join(", ");
    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default App;
