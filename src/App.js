import { MissionUtils } from '@woowacourse/mission-utils';
import RoundHandler from './modules/roundHandler.js';
import { REGEX } from './modules/constants.js';

class App {
  async play() {
    const namesArray = await this.getCarNames();
    const rounds = await this.getRounds();

    const roundHandler = new RoundHandler(namesArray);

    MissionUtils.Console.print('\n실행 결과');

    for (let i = 0; i < rounds; i++) {
      roundHandler.runRound();
      const roundResult = roundHandler.getRoundResult();
      roundResult.forEach(res => MissionUtils.Console.print(`${res}`));
    }

    const winnersArray = roundHandler.getWinners();
    const winnersString = winnersArray.join(', ');
    MissionUtils.Console.print(`최종 우승자 : ${winnersString}`);
  }

  async getCarNames() {
    const namesInput = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    if (!REGEX.names.test(namesInput)) {
      throw new Error('[ERROR] 잘못된 Names 입력입니다.');
    }

    const namesArray = namesInput.split(',');
    return namesArray;
  }

  async getRounds() {
    const roundsInput = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    if (!REGEX.rounds.test(roundsInput)) {
      throw new Error('[ERROR] 잘못된 Rounds 입력입니다.');
    }

    return parseInt(roundsInput);
  }
}

export default App;
