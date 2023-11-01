import { Console, Random } from '@woowacourse/mission-utils';

const GAME_INPUT_CAR_NAME_NUMBER = 1;
const GAME_INPUT_TRY_NUMBER = 2;

class App {
  async play() {
    const carNames = await this.inputGameInfo(GAME_INPUT_CAR_NAME_NUMBER);
    const trial = await this.inputGameInfo(GAME_INPUT_TRY_NUMBER);
    Console.print('\n실행결과');

    const cars = carNames.map((name) => {
      return { name: name, score: 0 };
    });
    const result = this.playRacing(cars, trial);
    Console.print('최종 우승자 : ' + result);
  }

  validNameConvention(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      count++;
      if (string[i] === ',') {
        count = 0;
        continue;
      }
      if (count > 5) return false;
    }
    return true;
  }

  isNumber(string) {
    if (isNaN(string)) return false;
    return true;
  }

  async inputGameInfo(number) {
    let input;
    switch (number) {
      case GAME_INPUT_CAR_NAME_NUMBER:
        input = await Console.readLineAsync(
          '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
        );
        if (!this.validNameConvention(input))
          throw new Error('[ERROR] invalid name convention.');
        return input.split(',');

      case GAME_INPUT_TRY_NUMBER:
        input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
        if (!this.isNumber(input)) throw new Error('[ERROR] not a number.');
        return Number(input);
    }
  }

  playRacing(cars, trial) {
    while (trial--) {
      cars.forEach((car) => {
        if (this.getMovePoint()) car.score = car.score + 1;
        this.printEachScore(car);
      });
      Console.print('');
    }

    return this.tallyUpScore(cars);
  }

  getMovePoint() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) return true;
    return false;
  }

  printEachScore(car) {
    const name = car.name + ' : ';
    let score = '';

    for (let i = 0; i < car.score; i++) score += '-';
    Console.print(name + score);
  }

  tallyUpScore(cars) {
    const maxScore = Math.max(...cars.map((car) => car['score']));
    return cars
      .filter((car) => car['score'] === maxScore)
      .map((winner) => winner.name)
      .join(', ');
  }
}

export default App;
