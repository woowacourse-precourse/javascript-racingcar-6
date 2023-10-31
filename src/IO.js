import { Console } from '@woowacourse/mission-utils';

const MESSAGE = {
  INPUT: {
    TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
    CAR_NAMES:
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분)\n',
  },
  OUTPUT: {
    EXECUTION_RESULT: '\n실행 결과',
    WINNER: winners => `${winners.join(', ')}가 최종 우승했습니다.\n`,
    RACING_STATUS: racers =>
      racers
        .map(racer => `${racer.carName} : ${'-'.repeat(racer.move)}`)
        .join('\n')
        .concat('\n'),
  },
  ERROR: message => new Error(`[ERROR] ${message}`),
};

export const input = {
  async carNames() {
    const carNamesInput = await Console.readLineAsync(MESSAGE.INPUT.CAR_NAMES);
    const carNames = carNamesInput.split(',').map(carName => carName.trim());

    carNames.forEach(this.validateCarName);

    return carNames;
  },
  async tryCount() {
    const tryCountInput = await Console.readLineAsync(MESSAGE.INPUT.TRY_COUNT);
    const tryCount = tryCountInput.trim();

    this.validateTryCount(tryCount);

    return Number(tryCountInput);
  },
  validateCarName(carName) {
    if (carName.length === 0) {
      throw MESSAGE.ERROR('자동차 이름을 입력해주세요');
    }
    if (carName.length > 5) {
      throw MESSAGE.ERROR('자동차 이름은 5자 이하만 가능합니다.');
    }
  },
  validateTryCount(tryCount) {
    if (tryCount.length === 0) {
      throw MESSAGE.ERROR('시도 횟수를 입력해주세요.');
    }
    if (Number.isNaN(tryCount)) {
      throw MESSAGE.ERROR('시도 횟수는 숫자만 가능합니다.');
    }
    if (tryCount < 1) {
      throw MESSAGE.ERROR('시도 횟수는 1 이상이어야 합니다.');
    }
  },
};

export const output = {
  statesEveryIteration(racers) {
    Console.print(MESSAGE.OUTPUT.RACING_STATUS(racers));
  },
  winners(racers) {
    const maxMove = Math.max(...racers.map(racer => racer.move));
    const winningRacers = racers.filter(racer => racer.move === maxMove);
    const winnerNames = winningRacers.map(racer => racer.carName);
    Console.print(MESSAGE.OUTPUT.WINNER(winnerNames));
  },
  executionResult() {
    Console.print(MESSAGE.OUTPUT.EXECUTION_RESULT);
  },
};
