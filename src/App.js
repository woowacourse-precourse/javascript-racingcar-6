import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../src/Car";

class App {
  cars = [];

  static #isValidInput(input) {
    if (input.some((carName) => carName.length > 5 || carName.length < 1))
      throw new Error("[ERROR] 1자 이상, 5자 이하의 이름만 사용 가능합니다.");
  }

  // 자동차의 이름들을 입력받는 메소드
  static async #carNameInput() {
    const carNames = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNameArray = carNames.split(",");
    App.#isValidInput(carNameArray);
    return carNameArray;
  }

  // 입력받은 자동차들을 참여시키는 메소드
  async carInput() {
    const carNameArray = await App.#carNameInput();
    this.cars = carNameArray.map((carName) => new Car(carName));
  }

  async play() {}
}

export default App;
