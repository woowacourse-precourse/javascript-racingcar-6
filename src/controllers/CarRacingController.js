import Car from '../models/Car';
import CarRacingView from '../views/CarRacingView';
import { printMessage, printErrorMessage } from '../utils/messages';

class CarRacingController {
  constructor() {
    this.cars = [];
  }

  async getAndValidateInput() {
    const carNames = (await CarRacingView.promptCarNames())
      .split(',')
      .map(item => item.trim());
    this.validateNames(carNames);

    const raceCount = await CarRacingView.promptRaceCount();
    this.validateCount(raceCount);

    this.cars = carNames.map(name => new Car(name));
    return raceCount;
  }

  validateNames(names) {
    if (names.some(name => name.length > 5)) {
      printErrorMessage('[ERROR] 5글자 이하의 자동차 이름을 입력해주세요.');
    }
  }

  validateCount(count) {
    if (Number.isNaN(Number(count)) || Number(count) <= 0) {
      printErrorMessage('[ERROR] 0 이상의 숫자를 입력해주세요.');
    }
  }
}

export default CarRacingController;
