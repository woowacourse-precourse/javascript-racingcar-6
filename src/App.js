const MissionUtils = require('@woowacourse/mission-utils');
const { startGame } = require('./playing/startGame');

class App {
  async play() {
    MissionUtils.Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    await startGame();
  }
}

export default App;