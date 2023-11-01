import { MissionUtils } from "@woowacourse/mission-utils";

class RacingCar {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }
}

class RacingGame {
  constructor() {
    this.cars = [];
    this.numberOfTries = 0;
  }

  async getCarNamesFromUser() {
    const carNames = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분): ");
    const names = carNames.split(",");

    for (const name of names) {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    }

    return names.join(",");
  }

  async getNumberOfTriesFromUser() {
    const numberOfTries = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요? ");

    if (!numberOfTries || isNaN(numberOfTries)) {
      throw new Error("[ERROR] 올바른 횟수를 입력하세요.");
    }
    
    return parseInt(numberOfTries, 10);
  }

  initialize(carNames, numberOfTries) {
    // 게임 초기화: 자동차 이름과 시도 횟수 설정
    this.cars = carNames.split(",").map((name) => new RacingCar(name));
    this.numberOfTries = numberOfTries;
  }
}

class App {
  async play() {
    const game = new RacingGame();
    const carNames = await game.getCarNamesFromUser();
    const numberOfTries = await game.getNumberOfTriesFromUser();
    
    game.initialize(carNames, numberOfTries);
  }
}

export default App;
