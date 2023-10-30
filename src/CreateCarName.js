import { Console } from '@woowacourse/mission-utils';
import strings from './constants.js';
import Car from './Car.js';
import RacingCar from './RacingCar.js';
class CreateCarName {
  constructor() {
    this.carNameArr = [];
    this.carArr = [];
  }

  carName(inputName) {
    const inputNameArr = inputName.split(',');

    inputNameArr.forEach((inputNameElement) => {
      this.wrongName(inputNameElement);
    });

    Console.print(this.carNameArr.join(','));

    this.carNameArr.forEach((element) => {
      this.carArr.push(new Car(element));
    });

    this.playNumber();
  }

  wrongName(inputNameElement) {
    if (inputNameElement === '') {
      throw new Error('[ERROR] 값이 입력되지 않았습니다.');
    }

    if (inputNameElement.length > 5) {
      throw new Error('[ERROR] 이름은 5자 이하로 입력해주세요.');
    }

    if (/[^a-z]/i.test(inputNameElement)) {
      throw new Error('[ERROR] 이름을 제대로 입력해주세요.');
    }

    return this.carNameArr.push(inputNameElement);
  }

  async playNumber() {
    const inputNumber = await Console.readLineAsync(strings.ASK_NUMBER);
    const race = new RacingCar();
    race.playRace(inputNumber, this.carArr);
  }
}
export default CreateCarName;
