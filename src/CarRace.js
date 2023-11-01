import RacingCar from './RacingCar';
import { MissionUtils } from '@woowacourse/mission-utils';

class CarRace {
  constructor(racingCarsInput, attemptsInput) {
    this.racingCars = this.#initRacingCars(racingCarsInput);
    this.attempts = Number(attemptsInput);
  }

  race() {
    MissionUtils.Console.print('실행 결과');
    for (let i = 0; i < this.attempts; i++) {
      this.racingCars.forEach((racingCar) => {
        racingCar.move();
        racingCar.printPosition();
        MissionUtils.Console.print();
      });
    }
  }

  #getMaxPosition() {
    return this.racingCars.reduce(
      (max, rc) => (max < rc.position ? rc.position : max),
      0
    );
  }

  #getWinners() {
    return this.racingCars
      .filter((rc) => rc.position === this.#getMaxPosition())
      .map((rc) => rc.name)
      .join(', ');
  }

  printWinners() {
    MissionUtils.Console.print(`최종 우승자 : ${this.#getWinners()}`);
  }

  #initRacingCars(racingCarsInput) {
    return racingCarsInput
      .split(',')
      .map((racingCar) => new RacingCar(racingCar));
  }
}

export default CarRace;
