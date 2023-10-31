import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.winners = [];
    this.max = -Infinity;
  }

  async play() {
    const moveForward = (result) => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        result.push('-');
      }
    };
    const makeResult = (names, results) => {
      for (let i = 0; i < names.length; i += 1) {
        moveForward(results[i]);
        MissionUtils.Console.print(`${names[i]} : ${results[i].join('')}`);
      }
      MissionUtils.Console.print('');
    };
    const updateMaximum = (names, results, idx) => {
      if (results[idx].length > this.max) {
        this.winners = [names[idx]];
        this.max = results[idx].length;
      } else if (results[idx].length === this.max) {
        this.winners.push(names[idx]);
      }
    };
    const winnerAnnouncement = (names, results) => {
      for (let i = 0; i < results.length; i += 1) {
        updateMaximum(names, results, i);
      }
      MissionUtils.Console.print(`최종 우승자 : ${this.winners.join(', ')}`);
    };

    const string = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    let regex = /^.{1,5}(,.{1,5})*$/;
    if (!regex.test(string)) {
      throw new Error('[ERROR] 문자열이 잘못된 형식입니다.');
    }
    const names = string.split(',');

    const results = [];
    for (let i = 0; i < names.length; i += 1) {
      results.push([]);
    }

    const number = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n',
    );
    regex = /^\d+$/;
    if (!regex.test(number)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    MissionUtils.Console.print('\n실행 결과');

    for (let i = 0; i < number; i += 1) {
      makeResult(names, results);
    }

    winnerAnnouncement(names, results);
  }
}

export default App;
