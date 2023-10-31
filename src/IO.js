import { Console } from '@woowacourse/mission-utils';

export const MESSAGE = {
  INPUT: {
    TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
    CAR_NAMES:
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분)\n',
  },
  OUTPUT: {
    EXECUTION_RESULT: '\n실행 결과',
    WINNER: winners => `${winners.join(', ')}가 최종 우승했습니다.\n`,
    RACING_STATUS: racer => `${racer.carName} : ${'-'.repeat(racer.move)}\n`,
  },
  ERROR: message => `[ERROR] ${message}`,
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
    if (carName.length > 5) {
      throw new Error(MESSAGE.ERROR('자동차 이름은 5자 이하만 가능합니다.'));
    }
  },
  validateTryCount(tryCount) {
    const regex = /^[0-9]*$/;
    if (!regex.test(tryCount)) {
      throw new Error(MESSAGE.ERROR('시도 횟수는 숫자만 가능합니다.'));
    }
  },
};

export const output = {
  statesEveryIteration(racers) {
    const result = racers
      .map(racer => MESSAGE.OUTPUT.RACING_STATUS(racer))
      .join('\n')
      .concat('\n');

    Console.print(result);
  },
  winners(racers) {
    const maxMove = Math.max(...racers.map(racer => racer.move));
    const winningRacers = racers.filter(racer => racer.move === maxMove);
    const winnerNames = winningRacers.map(racer => racer.carName);
    Console.print(MESSAGE.OUTPUT.WINNER(winnerNames));
  },
};
