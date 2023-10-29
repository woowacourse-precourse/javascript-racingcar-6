import { Random, Console } from '@woowacourse/mission-utils';

class Lap {
  constructor(entry, laplength) {
    this.entry = entry;
    this.laplength = laplength;
    this.record = [];
  }

  makeRecord() {
    this.entry.forEach((carName) => {
      this.record.push(`${carName} : `);
    });
  }

  printStage() {
    for (let i = 0; i < this.lablength; i += 1) {
      if (Random.pickNumberInRange(0, 9) > 3) this.record[i] += '-';
    }
    Console.print(this.record.join('\n'));
  }
}
