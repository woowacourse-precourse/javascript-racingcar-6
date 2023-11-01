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
}

class App {
  async play() {
    const game = new RacingGame();
    const carNames = await game.getCarNamesFromUser();
  }
}

export default App;
