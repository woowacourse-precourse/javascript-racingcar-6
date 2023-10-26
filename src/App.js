import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carNames = await this.getCarNames();
    console.log(carNames)
  }

  async getCarNames() {
    const input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n')
    return input;
  }

}

export default App;
