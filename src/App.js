import { MissionUtils } from "@woowacourse/mission-utils";

const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  constructor() {}
  async carNameInput() {
    const userInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    return userInput.split(","); 
  }
  async play() {}
}

export default App;
