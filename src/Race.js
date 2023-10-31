import { Console } from '@woowacourse/mission-utils';

class Race {
  #trials;

  constructor() {
    this.#trials = 0;
  }

  async startRace() {
    await this.setTrials();
  }

  async setTrials() {
    const trials = parseInt(
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'),
      10,
    );
    if (
      Number.isNaN(trials) ||
      trials < 1 ||
      trials > Number.MAX_SAFE_INTEGER
    ) {
      throw new Error('[ERROR] 유효하지 않은 횟수 입력입니다.');
    }
    this.#trials = trials;
  }
}

export default Race;
