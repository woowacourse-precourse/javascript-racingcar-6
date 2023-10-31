import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    //자동차 이름 입력받기
    const carNameUserInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNames = carNameUserInput.split(",");
  }
}

export default App;
