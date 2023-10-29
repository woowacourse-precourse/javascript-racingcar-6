import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const names = await this.getCarNames();
    const count = await this.getPlayCount();
    const nameToNumberMap = {};

    Console.print('\n실행 결과');
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < names.length; j++) {
        const name = names[j];
        const randomNumber = this.randomIndex();
        const number = nameToNumberMap[name] || randomNumber;
        nameToNumberMap[name] = number + randomNumber;   
        const dashes = number > 0 ? '-'.repeat(number) : '';

        Console.print(`${name} : ${dashes} `);
      }
      Console.print('\n');
    }

    const winners = this.findWinners(names, nameToNumberMap);
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }

  async getCarNames() {
    const carNamesInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = carNamesInput
      .split(',')
      .map(item => item.trim());

    if (carNames.some(name => name.length > 5)) {
      throw new Error('이름은 5글자 이하로만 입력할 수 있습니다.');
    }

    return carNames;
  } 

  async getPlayCount() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const count = parseInt(input, 10);

    this.validatePlayCount(count);

    return count;
  }

  validatePlayCount(count) {
    if (isNaN(count)) {
      throw new Error('[ERROR] 값이 잘 못 입력되었습니다.');
    }
  }

  randomIndex() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber >= 4 ? 1 : 0;
  }

  findWinners(names, nameToNumberMap) {
    const winners = [];
    let highestScore = -1;

    for (const name of names) {
      const number = nameToNumberMap[name];
      if (number > highestScore) {
        highestScore = number;
        winners.length = 0;
        winners.push(name);
      } else if (number == highestScore) {
        winners.push(name);
      }
    }

    return winners;
  }
}

export default App;
