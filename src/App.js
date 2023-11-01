import { MissionUtils } from "@woowacourse/mission-utils";

class RacingCar {
  constructor(name) {
    if (name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }
    this.name = name;
    this.position = 0;
  }

  move(){
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) {
      this.position++;
    }
  }
}

class RacingGame {
  constructor(carNames, numberOfTries) {
    this.cars = carNames.split(",").map((name) => new RacingCar(name));
    this.numberOfTries = numberOfTries;
  }

  async playGame() {
    for (let i = 0; i < this.numberOfTries; i++) {
      this.moveCars();
      await this.printRaceResult();
    }
  }

  moveCars() {
    for (const car of this.cars) {
      car.move();
    }
  }
}

class App {
  async play() {
    const carNames = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분): ");
    const numberOfTries = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? "
    );
    if (!numberOfTries || isNaN(numberOfTries)) {
      throw new Error("[ERROR] 올바른 횟수를 입력하세요.");
    }

    const game = new RacingGame(carNames, parseInt(numberOfTries, 10));
    await game.playGame();
  }
}

export default App;
