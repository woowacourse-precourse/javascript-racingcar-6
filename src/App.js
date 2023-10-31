import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.cars = [];
    this.input = 0;
    this.forward = new Map();
  }

  getCarName = async () => {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    this.cars = input.split(',').map((v) => v.trim());
    this.isValid();

    return this.cars;
  };

  getAttempts = async () => {
    this.input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.isValidAttempt();
    return this.input;
  };

  isValidLength = () => {
    const LENGTH_REGEX = /^.{1,5}$/;
    return this.cars.every((name) => LENGTH_REGEX.test(name));
  };

  isValidString = () => {
    const NAME_REGEX = /^[A-Za-z]*$/;
    return this.cars.every((name) => NAME_REGEX.test(name));
  };

  isValidDuplication = () => {
    const DUPLICATION = new Set(this.cars);
    return DUPLICATION.size === this.cars.length;
  };

  isValid = () => {
    if (!this.isValidLength())
      throw new Error('[ERROR] 1글자에서 5글자 사이의 이름만 입력 가능합니다.');

    if (!this.isValidString()) throw new Error('[ERROR] 영문으로 이루어진 이름만 입력 가능합니다.');
    if (!this.isValidDuplication()) throw new Error('[ERROR] 중복되는 이름은 입력할 수 없습니다.');
  };

  isValidNumber = () => {
    const ATTEMPT_REGEX = /^[0-9]+$/.test(this.input);
    return ATTEMPT_REGEX;
  };

  isValidAttempt = () => {
    if (!this.isValidNumber()) throw new Error('[ERROR] 숫자만 입력 가능합니다.');
  };

  race = (car) => {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.moveCar(car);
    } else {
      this.stopCar(car);
    }
  };

  moveCar = (car) => {
    if (this.forward.has(car)) {
      this.forward.set(car, this.forward.get(car) + '-');
    } else {
      this.forward.set(car, '-');
    }
  };

  stopCar = (car) => {
    if (this.forward.get(car) === undefined) {
      this.forward.set(car, '');
    }
  };

  getRaceResult = () => {
    Console.print('\n실행 결과');

    for (let i = 0; i < this.input; i++) {
      this.cars.forEach((car) => {
        this.race(car);
        Console.print(`${car} : ${this.forward.get(car)}`);
      });
      Console.print('\n');
    }
  };

  getRaceWinner = () => {
    let max = 0;
    let winners = [];

    this.forward.forEach((advance) => {
      if (advance.length > max) {
        max = advance.length;
      }
    });

    this.forward.forEach((advance, key) => {
      if (max === advance.length) {
        winners.push(key);
      }
    });

    Console.print(`\n최종 우승자: ${winners.join(', ')}`);
  };

  async play() {
    await this.getCarName();
    await this.getAttempts();
    this.getRaceResult();
    this.getRaceWinner();
  }
}

export default App;
