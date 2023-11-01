import { Console, Random } from '@woowacourse/mission-utils';
import MESSAGES from './constants/message.js';

class App {
  constructor() {
    this.carNames = [];
    this.tryCount = 0;
    this.roundResult = {};
  }

  validateCarNames(input) {
    const carNames = input.split(',');

    if (carNames.some(carName => carName.length > 5 || carName.length === 0)) {
      throw new Error('[ERROR] 자동차 이름은 각각 1자 이상 5자 이하여야 합니다.');
    }

    if (carNames.length !== new Set(carNames).size) {
      throw new Error('[ERROR] 자동차 이름은 각각 다른 이름을 입력해야 합니다.');
    }

    if (carNames.length < 2) {
      throw new Error('[ERROR] 최소 2대 이상의 자동차 이름을 입력해야 합니다.');
    }

    if (!carNames.every(carName => carName.trim())) {
      throw new Error('[ERROR] 자동차 이름을 입력해야 합니다.');
    }

    this.carNames = carNames;
  }

  validateRoundCount(input) {
    const tryCount = +input;
    const regex = /^[1-9]\d*$/;

    if (Number.isNaN(tryCount) || tryCount <= 0) {
      throw new Error('[ERROR] 올바른 횟수를 입력하세요.');
    }

    if (!regex.test(tryCount)) {
      throw new Error('[ERROR] 입력값은 양의 정수여야 합니다.');
    }

    this.tryCount = tryCount;
  }

  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  runRaceAndRoundPrint(carList, tryCount) {
    const DASH = '-';
    const roundResult = carList.reduce((a, c) => {
      a[c] = 0;
      return a;
    }, {});

    Console.print(MESSAGES.RESULT_VIEW);
    for (let round = 1; round <= tryCount; round++) {
      carList.forEach(carName => {
        this.getRandomNumber() >= 4 && (roundResult[carName] += 1);
        Console.print(`${carName} : ${DASH.repeat(roundResult[carName])}`);
      });
      Console.print('');
    }
    this.roundResult = roundResult;
  }

  getRaceResult(result) {
    const max = Math.max(...Object.values(result));
    const winner = Object.entries(result)
      .filter(v => v[1] === max)
      .map(v => v[0]);
    Console.print(`최종 우승자 : ${winner}`);
  }

  async play() {
    const userInputCarNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    this.validateCarNames(userInputCarNames);

    const userInputRoundCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    this.validateRoundCount(userInputRoundCount);

    this.runRaceAndRoundPrint(this.carNames, this.tryCount);
    this.getRaceResult(this.roundResult);
  }
}

export default App;
