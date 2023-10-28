import { Console } from '@woowacourse/mission-utils';
import RacingCar from './racingCar.js';

class App {
  async play() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    await this.getCarNamesInput();
    this.racingCars = [];
    this.buildRacingCar();
    await this.getRepeatCountInput();
    this.repeatGame();
    this.printWinner();
  }

  async getCarNamesInput() {
    const carNames = await Console.readLineAsync('');
    const splitCarNames = carNames.split(',');
    const carNamesRemoveWhitespace = splitCarNames.map((name) => name.trim());
    this.carNames = carNamesRemoveWhitespace;
    this.carNamesValidation();
  }

  carNamesValidation() {
    const setCarNames = new Set(this.carNames);
    const lengthValidate = this.carNames.some((name) => name.length > 5);
    const emptyValidate = this.carNames.some((name) => name === '');
    const uniqueValidate = setCarNames.size !== this.carNames.length;
    if (lengthValidate || emptyValidate || uniqueValidate) {
      throw new Error('[ERROR] 자동차 이름이 잘못된 형식입니다.');
    }
  }

  buildRacingCar() {
    for (let i = 0; i < this.carNames.length; i += 1) {
      const carName = this.carNames[i];
      const car = new RacingCar(carName);
      this.racingCars.push(car);
    }
  }

  async getRepeatCountInput() {
    this.repeatCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.repeatCountValidation();
  }

  repeatCountValidation() {
    const numberValidate = [...this.repeatCount].every((digit) => !Number.isNaN(+digit));
    if (!numberValidate) throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }

  repeatGame() {
    Console.print('\n실행 결과');
    for (let i = 0; i < this.repeatCount; i += 1) {
      this.repeatCarMove();
    }
  }

  repeatCarMove() {
    this.racingCars.forEach((car) => car.carMoveEvaluation());
    Console.print('');
  }

  printWinner() {
    const maxDistance = this.getMaxDistance();
    const winnersName = this.getWinnersName(maxDistance);
    Console.print(`최종 우승자 : ${winnersName}`);
  }

  getWinnersName(maxDistance) {
    const winners = [];
    this.racingCars.forEach(({ name, distance }) => {
      if (distance === maxDistance) winners.push(name);
    });
    return winners.join(', ');
  }

  getMaxDistance() {
    let maxDistance = 0;
    for (let i = 0; i < this.racingCars.length; i += 1) {
      const currentDistance = this.racingCars[i].distance;
      if (currentDistance > maxDistance) maxDistance = currentDistance;
    }
    return maxDistance;
  }
}

export default App;
