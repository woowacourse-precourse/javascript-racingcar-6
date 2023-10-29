import computer from '../utils/console.js';
import { Random } from '@woowacourse/mission-utils';

class Lap {
  constructor(entry, laplength) {
    this.entry = entry;
    this.laplength = laplength;
    this.record = [];
    this.makeRecord();
  }

  makeRecord() {
    this.entry.forEach((carName) => {
      this.record.push(`${carName} : `);
    });
  }

  printStage() {
    for (let i = 0; i < this.entry.length; i += 1) {
      if (Random.pickNumberInRange(0, 9) > 3) this.record[i] += '-';
    }
    computer.tell(this.record.join('\n'));
    computer.tell('');
  }
}

export default Lap;
