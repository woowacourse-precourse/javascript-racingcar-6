import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.cars = new Map();
    this.tryOut = 0;
    this.randomNumber = 0;
    this.dashes = '';
  }

  verifyAndInitCars(userInputCarNames) {
    const carsArray = userInputCarNames.split(',');
    carsArray.forEach(carName => {
      if (carName.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
      } else if (carName.length === 0) {
        throw new Error('[ERROR] 자동차 이름은 1자 이상이어야 합니다.');
      } else if (this.cars.has(carName)) {
        throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다.');
      }
      this.cars.set(carName, 0);
    });
  }

  verifyAndSetTryOut(userInputTryOut) {
    if (!parseInt(userInputTryOut, 10)) {
      throw new Error('[ERROR] 시도 횟수는 숫자만 입력 가능합니다.');
    } else if (parseInt(userInputTryOut, 10) < 1) {
      throw new Error('[ERROR] 시도 횟수는 1 이상이어야 합니다.');
    }
    this.tryOut = parseInt(userInputTryOut, 10);
  }

  getRandomNumber() {
    this.randomNumber = Random.pickNumberInRange(0, 9);
  }

  isMoveCar() {
    this.getRandomNumber();
    return this.randomNumber >= 4;
  }

  moveCars() {
    this.cars.forEach((value, key) => {
      if (this.isMoveCar()) {
        this.cars.set(key, value + 1);
      }
    });
  }

  drawDash(value) {
    this.dashes = '-'.repeat(value);
  }

  displayResultSteps() {
    this.cars.forEach((value, key) => {
      this.drawDash(value);
      Console.print(`${key} : ${this.dashes}`);
    });
    Console.print('');
  }

  displayWinner() {
    const maxMove = Math.max(...this.cars.values());
    const winners = [...this.cars.keys()].filter(
      carName => this.cars.get(carName) === maxMove,
    );

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }

  async play() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    this.verifyAndInitCars(carNames);

    const tryOut = await Console.readLineAsync('시도할 회수는 몇회인가요?\n');
    this.verifyAndSetTryOut(tryOut);

    let round = 0;
    Console.print('\n실행 결과');

    while (round < this.tryOut) {
      this.moveCars();
      this.displayResultSteps();
      round += 1;
    }

    this.displayWinner();
  }
}
export default App;
