import { MissionUtils } from "@woowacourse/mission-utils";
import User from './UserInput.js'

class App {
  async play() {
    MissionUtils.Console.print('자동차 경주 게임을 시작합니다.');
    const user = new User()
    await user.userInputCarName()
  }
}

export default App;
