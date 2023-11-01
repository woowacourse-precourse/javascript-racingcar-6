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

  #initRacingCars(racingCarsInput) {
    return racingCarsInput
      .split(',')
      .map((racingCar) => new RacingCar(racingCar));
  }
}

export default CarRace;
