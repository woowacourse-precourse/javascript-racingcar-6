import { Console } from '@woowacourse/mission-utils';

export const input = {
  MESSAGE: {
    TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
    CAR_NAMES:
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분)\n',
    ERROR: '[ERROR] 자동차 이름은 5자 이하만 가능합니다.',
  },
  async carNames() {
    const carNames = (await Console.readLineAsync(this.MESSAGE.CAR_NAMES))
      .split(',')
      .map(carName => {
        this.validateCarName(carName);
        return carName;
      });
    return carNames;
  },
  async tryCount() {
    const tryCount = await Console.readLineAsync(this.MESSAGE.TRY_COUNT);
    return tryCount;
  },
  validateCarName(carName) {
    if (carName.length > 5) {
      throw new Error(this.MESSAGE.ERROR);
    }
  },
};

export const output = {
  MESSAGE: {
    EXECUTION_RESULT: '\n실행 결과',
    WINNER: winners => `${winners.join(', ')}가 최종 우승했습니다.\n`,
    RACING_STATUS: racer => `${racer.carName} : ${'-'.repeat(racer.move)}`,
  },
  statesEveryIteration(racers) {
    const result = racers
      .map(racer => this.MESSAGE.RACING_STATUS(racer))
      .join('\n')
      .concat('\n');
    Console.print(result);
  },
  winners(racers) {
    const maxMove = Math.max(...racers.map(racer => racer.move));
    const winningRacers = racers.filter(racer => racer.move === maxMove);
    const winnerNames = winningRacers.map(racer => racer.carName);
    Console.print(this.MESSAGE.WINNER(winnerNames));
  },
};
