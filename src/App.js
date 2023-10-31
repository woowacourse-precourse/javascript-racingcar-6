import { Console } from "@woowacourse/mission-utils";
import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  async play() {
    const userInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const carName = userInput.split(",");
    
    console.log(carName);
  }
}

export default App;
