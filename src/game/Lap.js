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
    // 차수별 진행상황 출력용 배열 생성
    this.entry.forEach((carName) => {
      this.#record.push(`${carName} : `);
    });
  }

  recordCheck() {
    this.goFoward(this.#record);
    this.printStage(this.#record);
  }

  goFoward(record) {
    // 전진 여부 확인 로직
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
