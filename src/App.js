import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.racingCars = {};
    this.winnerScore = 0;
    this.winner = [];
  }

  validateCarNames(carNames) {
    if (carNames.indexOf(',') === -1)
      throw new Error('[ERROR] 자동차 이름 입력이 잘못되었습니다.');

    const carNamesArray = carNames.split(',');

    const checkNumberSet = new Set(carNamesArray);

    if (carNamesArray.length !== checkNumberSet.size)
      throw new Error('[ERROR] 자동차 이름 입력이 잘못되었습니다.');

    carNamesArray.map((car) => {
      if (car.length > 5)
        throw new Error('[ERROR] 자동차 이름은 5자 이내로 작성해주세요.');
      this.racingCars[car] = '-';
      if (car === '')
        throw new Error('[ERROR] 자동차 이름 입력이 잘못되었습니다.');
    });
  }

  validateTryNumbers(TryNumbers) {
    if (
      isNaN(+TryNumbers) ||
      TryNumbers < 1 ||
      TryNumbers === Infinity ||
      TryNumbers === -Infinity
    )
      throw new Error('[ERROR] 숫자 입력이 잘못된 형식입니다.');
  }

  racing(cars) {
    Object.keys(cars).map((car) => {
      const number = Random.pickNumberInRange(1, 9);
      if (number > 4) cars[car] += '-';
      Console.print(`${car} : ${cars[car]}`);
    });
  }

  async play() {
    try {
      const racingCarNames = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );
      this.validateCarNames(racingCarNames);

      const racingTryNumbers = await Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?\n'
      );
      this.validateTryNumbers(racingTryNumbers);

      Console.print('\n실행 결과');
      for (let i = 0; i < racingTryNumbers; i++) {
        this.racing(this.racingCars);
        Console.print(`\n`);
      }

      Object.values(this.racingCars).map((score) =>
        this.winnerScore < score.length ? (this.winnerScore = score.length) : ''
      );

      for (const car in this.racingCars) {
        if (this.racingCars[car].length === this.winnerScore)
          this.winner.push(car);
      }

      Console.print(`최종 우승자 : ${this.winner}`);
    } catch (error) {
      throw Error(error);
    }
  }
}

export default App;
