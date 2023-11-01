import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.car = [];
    this.data = [];
    this.winner = [];
    this.attempt = 0;
  }

  async getCarName() {
    const carName = (
      await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
      )
    ).split(",");
    App.CarNameValidator(carName);
  }
  
  static CarNameValidator(CarName) {
    if (input.length > 5) {
      throw new Error("[ERROR] 이름은 5자 이하가 되어야 합니다.");
    }
  }
  
  async play() {
  }
}

export default App;
