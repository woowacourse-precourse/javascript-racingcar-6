import { Console } from '@woowacourse/mission-utils';
import { IN_GAME_MESSAGE } from '../src/constants.js';
import Car from './Car.js';
import Race from './Race.js';

class RacingCar {
  async startGame() {
    const car = new Car();
    await car.initialize();

    const race = new Race();
    await race.initialize();

    const result = race.proceedRace(car);
    this.endGame(result);
  }

  endGame(carList) {
    // TODO: 우승자 안내 및 게임 종료 구현
  }
}

export default RacingCar;
