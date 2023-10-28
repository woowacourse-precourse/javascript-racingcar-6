import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.racingCars = {};
    this.winnerScore = 0;
    this.winner = [];
  }

  async play() {
    try {
      const racingCarNames = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );

      if (racingCarNames.indexOf(',') === -1) throw new Error();

      racingCarNames.split(',').map((car, _, array) => {
        if (array.length > 5) throw new Error();
        this.racingCars[car] = 0;
        if (car === '') throw new Error();
      });

      const racingTryNumbers = await Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?\n'
      );

      if (
        isNaN(+racingTryNumbers) ||
        racingTryNumbers < 1 ||
        racingTryNumbers === Infinity ||
        racingTryNumbers === -Infinity
      )
        throw new Error();

      Console.print('\n실행 결과');
      for (let i = 0; i < racingTryNumbers; i++) {
        Object.keys(this.racingCars).map((car) => {
          const number = Random.pickNumberInRange(1, 9);
          if (number > 4) this.racingCars[car]++;
          let meter = '-'.repeat(this.racingCars[car]);
          Console.print(`${car} : ${meter}`);
        });
        Console.print(`\n`);
      }

      Object.values(this.racingCars).map((score) =>
        this.winnerScore < score ? (this.winnerScore = score) : ''
      );

      for (const car in this.racingCars) {
        if (this.racingCars[car] === this.winnerScore) this.winner.push(car);
      }

      Console.print(`최종 우승자 : ${this.winner}`);
    } catch (error) {
      throw new Error('[ERROR] 잘못된 형식입니다.');
    }
  }
}

export default App;
