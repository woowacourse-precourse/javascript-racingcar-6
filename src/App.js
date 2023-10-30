const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
class App {
  async inputCarNames() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    return carNames;
  }
  async inputTryCount() {
    const tryCount = await Console.readLineAsync("시도할 회수는 몇회인가요?");
    return tryCount;
  }
  input() {
    this.inputCarNames();
    this.inputTryCount();
  }
  async play() {}
}

export default App;
