import { MissionUtils } from '@woowacourse/mission-utils';
import { checkNames, checkRounds } from './modules/checkUserInput.js';

class App {
  async play() {
    await this.getCarNames();
    await this.getRounds();
    MissionUtils.Console.print('\n실행 결과');
  }

  async getCarNames() {
    const namesInput = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    checkNames(namesInput);
    const namesArray = namesInput.split(',');
    return namesArray;
  }

  async getRounds() {
    const roundsInput = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
    checkRounds(roundsInput);
    return parseInt(roundsInput);
  }
}

const a = new App();
a.play();

export default App;
