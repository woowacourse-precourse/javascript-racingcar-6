import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.cars = [];
    this.input = 0;
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
    const ATTEMPT_REGEX = /^[0-9]$/.test(this.input);
    return ATTEMPT_REGEX;
  };

  isValidAttempt = () => {
    if (!this.isValidNumber()) throw new Error('[ERROR] 숫자만 입력 가능합니다.');
  };

  async play() {
    const car = await this.getCarName();
    const attempt = await this.getAttempts();
  }
}

export default App;
