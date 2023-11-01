import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from './InputView.js';

class App {
  tryCount = 0;
  async play() {
    await this.requestCarNames();
    await this.requestTryCount();
  }

  async requestCarNames() {
    const carNames = await InputView.requestCarNames();
    return carNames;
  }

  async requestTryCount() {
    const tryCount = await InputView.requestTryCount();
    this.tryCount = tryCount;
    MissionUtils.Console.print('');
    return tryCount;
  }
}

export default App;
