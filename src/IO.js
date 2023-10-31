import { Console } from '@woowacourse/mission-utils';

export const input = {
  MESSAGE: {
    TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
    CAR_NAMES:
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분)\n',
    ERROR: '[ERROR] 자동차 이름은 5자 이하만 가능합니다.',
  },
  carNames: async () => {
    const carNames = (await Console.readLineAsync(this.MESSAGE.CAR_NAMES))
      .split(',')
      .map(carName => {
        if (carName.length > 5) {
          throw new Error(this.MESSAGE.ERROR);
        }
        return carName;
      });
    return carNames;
  },
  tryCount: async () => {
    const tryCount = await Console.readLineAsync(this.MESSAGE.TRY_COUNT);
    return tryCount;
  },
};

export const output = {
  MESSAGE: {
    ERROR: '[ERROR] 자동차 이름은 5자 이하만 가능합니다.',
    EXECUTION_RESULT: '\n실행 결과',
    WINNER: winners => `${winners.join(', ')}가 최종 우승했습니다.\n`,
    RACING_STATUS: racer => `${racer.carName} : ${'-'.repeat(racer.move)}`,
  },
  outputResultsEveryIteration: racers => {
    const result = racers
      .map(racer => this.MESSAGE.RACING_STATUS(racer))
      .join('\n')
      .concat('\n');
    Console.print(result);
  },
  outputWinner: racers => {
    const winners = racers
      .sort((a, b) => b.move - a.move)
      .filter(racer => racer.move === racers[0].move)
      .map(racer => racer.carName);
    Console.print(this.MESSAGE.WINNER(winners));
  },
};
