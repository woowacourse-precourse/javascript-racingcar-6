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
}
