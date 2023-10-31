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
    const trials = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.#trials = trials;
    Console.print(this.#trials);
  }
}

export default Race;
