import { Console } from '@woowacourse/mission-utils';

const MESSAGE = {
  INPUT: {
    TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
    CAR_NAMES:
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분)\n',
  },
  OUTPUT: {
    EXECUTION_RESULT: '\n실행 결과',
    WINNER: winnerNames => `최종 우승자 : ${winnerNames.join(', ')}\n`,
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

    this.validateCarName(carNames);

    return carNames;
  },
  async tryCount() {
    const tryCountInput = await Console.readLineAsync(MESSAGE.INPUT.TRY_COUNT);
    const tryCount = tryCountInput.trim();

    this.validateTryCount(tryCount);

    return Number(tryCountInput);
  },
  validateCarName(carNames) {
    const uniqueCarNames = [...new Set(carNames)];
    if (uniqueCarNames.length !== carNames.length) {
      throw MESSAGE.ERROR('중복된 이름이 존재합니다.');
    }
    carNames.forEach(carName => {
      if (carName.length === 0) {
        throw MESSAGE.ERROR('자동차 이름을 입력해주세요');
      }
      if (carName.length > 5) {
        throw MESSAGE.ERROR('자동차 이름은 5자 이하만 가능합니다.');
      }
    });
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
  winners(winnerNames) {
    Console.print(MESSAGE.OUTPUT.WINNER(winnerNames));
  },
  executionResult() {
    Console.print(MESSAGE.OUTPUT.EXECUTION_RESULT);
  },
};
