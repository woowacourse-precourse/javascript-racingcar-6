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
export default App;
