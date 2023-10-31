import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {}

  validateCarNames(input) {
    const carNames = input.split(',');

    if (carNames.some(name => name.length > 5 || name.length === 0)) {
      throw new Error('[ERROR] 자동차 이름은 각각 1자 이상 5자 이하여야 합니다.');
    }

    if (carNames.length !== new Set(carNames).size) {
      throw new Error('[ERROR] 자동차 이름은 각각 다른 이름을 입력해야 합니다.');
    }

    if (carNames.length < 2) {
      throw new Error('[ERROR] 최소 2대 이상의 자동차 이름을 입력해야 합니다.');
    }
  }

  async play() {
    const userInputCarNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    this.validateCarNames(userInputCarNames);
    // const userInputRoundCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    // this.validateRoundCount(userInputRoundCount);

    // this.racing(userInputCarNames, userInputRoundCount);
    // this.winner(result);
  }
}

export default App;
