import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {}

  async play() {
    const userInputCarNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    this.validateCarNames(userInputCarNames);
    const userInputRoundCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    this.validateRoundCount(userInputRoundCount);

    this.racing(userInputCarNames, userInputRoundCount);
    this.winner(result);
  }
}

export default App;
