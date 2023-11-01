import { MissionUtils } from '@woowacourse/mission-utils';
import { seperateCarNames, processTrialInput } from '../utils/inputHandling.js';

class App {
  carNamesArray;
  #trialNum;
  async init() {
    this.carNamesArray = seperateCarNames(
      await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      ),
    );
    this.#trialNum = processTrialInput(
      await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'),
    );
  }
  constructor() {
    this.carNamesArray = [];
    this.#trialNum = 0;
  }
  async play() {
    await this.init();
  }
}

export default App;
