const readline = require('readline');
const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  async play() {
    // 입력값
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const raceCarNames = await Console.readLineAsync();
    const names = raceCarNames.split(',');

    if (names.some(name => name.trim().length >= 5)) {
      throw new Error("[ERROR] 이름의 최대 길이는 5입니다.");
    }

    Console.print('시도할 횟수는 몇 회인가요?');
    const raceCnt = await Console.readLineAsync();
    const raceCount = parseInt(raceCnt);

    if (isNaN(raceCount) || raceCount <= 0) {
      throw new Error("[ERROR] 시도할 횟수는 0 또는 양의 정수값만 가능합니다.");
    }


    Console.print('실행 결과');
    for (let i = 0; i < raceCount; i++) {
      names.forEach(name => {
        const runOrStop = Random.pickNumberInRange(0, 9);
        if (runOrStop >= 4) {
          this.results[name] = (this.results[name] || '') + '-';
        } else {
          this.results[name] = this.results[name] || '';
        }
      });

      names.forEach(name => {
        Console.print(`${name} : ${this.results[name]}`);
      });
      Console.print();
    }

    const maxDashes = Math.max(...Object.values(this.results).map(value => value.length));
    const winners = Object.keys(this.results).filter(name => this.results[name].length === maxDashes);

    Console.print(`최종 우승자: ${winners.join(', ')}`);

  }
}

export default App;

const app = new App();
app.play();