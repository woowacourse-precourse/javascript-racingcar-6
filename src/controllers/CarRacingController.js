import Car from '../models/Car';
import { printMessage, printErrorMessage } from '../utils/messages';

class CarRacingController {
  constructor(view) {
    this.view = view;
    this.cars = [];
  }

  async getAndValidateInput() {
    const carNames = (await this.view.promptCarNames())
      .split(',')
      .map(item => item.trim());
    this.validateNames(carNames);

    const raceCount = await this.view.promptRaceCount();
    this.validateCount(raceCount);

    this.cars = carNames.map(name => new Car(name));
    return raceCount;
  }

  validateNames(names) {
    if (names.some(name => name === '')) {
      printErrorMessage('[ERROR] 자동차 이름을 비워둘 수 없습니다.');
      return;
    }

    if (names.some(name => name.length > 5)) {
      printErrorMessage('[ERROR] 5글자 이하의 자동차 이름을 입력해주세요.');
      return;
    }

    const uniqueNames = [...new Set(names)];
    if (uniqueNames.length !== names.length) {
      printErrorMessage('[ERROR] 중복된 자동차 이름을 입력할 수 없습니다.');
    }
  }

  validateCount(count) {
    if (Number.isNaN(Number(count)) || Number(count) <= 0) {
      printErrorMessage('[ERROR] 1 이상의 숫자를 입력해주세요.');
    }
  }

  playRacingGame(raceCount) {
    printMessage('\n실행 결과');
    for (let i = 0; i < raceCount; i += 1) {
      this.cars.forEach(car => car.move());
      this.view.showRoundResult(this.cars);
    }
    const winners = this.getWinners();
    this.view.showWinners(winners);
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));
    return this.cars
      .filter(car => car.position === maxPosition)
      .map(car => car.name);
  }
}

export default CarRacingController;
