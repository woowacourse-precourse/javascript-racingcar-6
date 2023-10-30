import computer from '../utils/console.js';
import { Random } from '@woowacourse/mission-utils';

class Lap {
  #record;

  constructor(entry) {
    this.entry = entry;
    this.#record = [];
    this.makeRecord();
  }

  makeRecord() {
    this.entry.forEach((carName) => {
      this.#record.push(`${carName} : `);
    });
  }

  recordCheck() {
    this.goFoward(this.#record);
    this.printStage(this.#record);
  }

  goFoward(record) {
    for (let i = 0; i < this.entry.length; i += 1) {
      if (Random.pickNumberInRange(0, 9) > 3) record[i] += '-';
    }
  }

  printStage(record) {
    computer.tell(record.join('\n'));
    computer.tell('');
  }

  getRecord() {
    return this.#record;
  }
}

export default Lap;
