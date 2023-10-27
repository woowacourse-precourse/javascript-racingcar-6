import { MissionUtils } from "@woowacourse/mission-utils";

const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  constructor() {}

  async carNameInput() {
    const userInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    try {
      this.carNameValidation(userInput);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
    return userInput.split(",");
  }

  carNameValidation(userInput) {
    const carNames = userInput.split(",");
    carNames.forEach((carName) => {
      if (carName.length < 5) {
        throw new Error("[ERROR] 자동차 이름이 5글자 아래입니다.");
      }
    });
  }

  async play() {}
}

export default App;
