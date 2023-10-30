import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(carName) {
    this.validateName(name);
    this.name = name;
    this.position = 0;
  }

  validateName(name) {
    if (name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.")
    }
  }
}

class App {
  async play() {
    MissionUtils.Console.print('자동차 경주 게임을 시작합니다!');
    try {
      await this.inputCarNames();
     } catch (error) {
      console.error(error.message);
     }
  }

  async inputCarNames() {
    const names = await MissionUtils.Console.readLineAsync();
    this.cars = names.split(',').map(name => new Car(name));
  }
}

export default App;
