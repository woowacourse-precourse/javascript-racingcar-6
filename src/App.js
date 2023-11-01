import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.winners = [];
    this.max = -Infinity;
    this.names = [];
    this.number = -1;
    this.results = [];
  }

  async getNames() {
    const string = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const regex = /^.{1,5}(,.{1,5})*$/;
    if (!regex.test(string)) {
      throw new Error('[ERROR] 문자열이 잘못된 형식입니다.');
    }
    this.names = string.split?.(',') || [];
    for (let i = 0; i < this.names.length; i += 1) {
      this.results.push([]);
    }
  }

  async getNumber() {
    this.number = +(await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n',
    ));
    const regex = /^\d+$/;
    if (!regex.test(this.number)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
  }

  moveForward(idx) {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      this.results[idx].push('-');
    }
  }

  makeResult() {
    for (let i = 0; i < this.names.length; i += 1) {
      this.moveForward(i);
      MissionUtils.Console.print(
        `${this.names[i]} : ${this.results[i].join('')}`,
      );
    }
    MissionUtils.Console.print('');
  }

  updateMaximum(idx) {
    if (this.results[idx].length > this.max) {
      this.winners = [this.names[idx]];
      this.max = this.results[idx].length;
    } else if (this.results[idx].length === this.max) {
      this.winners.push(this.names[idx]);
    }
  }

  winnerAnnouncement() {
    for (let i = 0; i < this.results.length; i += 1) {
      this.updateMaximum(i);
    }
    MissionUtils.Console.print(`최종 우승자 : ${this.winners.join(', ')}`);
  }

  async play() {
    await this.getNames();

    await this.getNumber();

    MissionUtils.Console.print('\n실행 결과');

    for (let i = 0; i < this.number; i += 1) {
      this.makeResult();
    }

    this.winnerAnnouncement();
  }
}

export default App;
