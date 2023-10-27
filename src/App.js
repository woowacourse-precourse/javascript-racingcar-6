import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    const carNames = this.validateInput(
      await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      )
    );

    const totalRounds = this.validateInput(
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n')
    );

    const cars = carNames.map((carName) => new Car(carName));

    Console.print('\n실행 결과');

    for (let i = 0; i < totalRounds; i++) {
      cars.forEach((car) => {
        car.moveOrStop();
        Console.print(`${car.name} : ${car.progress}`);
      });

      Console.print('');
    }
  }

  validateInput(input) {
    if (input === '') {
      throw new Error('[ERROR] 입력값이 없습니다.');
    }

    if (!isNaN(Number(input))) {
      return Number(input);
    }

    if (input.indexOf(' ') !== -1) {
      throw new Error('[ERROR] 입력값에 공백이 포함되었습니다.');
    }

    const cars = input.split(',').filter((v) => v);

    if (cars.length < 2) {
      throw new Error('[ERROR] 자동차는 최소 2대여야합니다.');
    }

    if (new Set(cars).size !== cars.length) {
      throw new Error('[ERROR] 중복된 자동차가 존재합니다.');
    }

    const isExceed = cars.some((car) => car.length > 5);

    if (isExceed) {
      throw new Error('[ERROR] 각 자동차명의 길이는 최대 5자입니다.');
    }

    return cars;
  }

  getWinners(cars) {}
}

export class Car {
  constructor(name) {
    this.name = name;
    this.progress = '';
  }

  moveOrStop() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    if (randomNumber >= 4) {
      this.progress += '-';
    }
  }
}

export default App;
