import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.racingCars = {};
    this.winnerScore = 0;
  }

  async play() {
    try {
      const racingCarNames = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );
      racingCarNames.split(',').map((car) => (this.racingCars[car] = 0));

      const racingTryNumbers = await Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?\n'
      );

      Console.print('\n실행 결과');
      for (let i = 0; i < racingTryNumbers; i++) {
        Object.keys(this.racingCars).map((car) => {
          const number = Random.pickNumberInRange(1, 9);
          if (number > 4) this.racingCars[car]++;
        });
      }
      console.log(this.racingCars);
    } catch (error) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
  }
}

export default App;
