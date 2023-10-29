import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  static isValidInput(input) {
    if (input.some((carName) => carName.length > 5 || carName.length < 1))
      throw new Error("[ERROR] 1자 이상, 5자 이하의 이름만 사용 가능합니다.");
  }

  // 자동차의 이름들을 입력받는 메소드
  static async carNameInput() {
    const carNames = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNameArray = carNames.split(",");
    App.isValidInput(carNameArray);
    return carNameArray;
  }

  async play() {}
}

export default App;
