import { Console } from '@woowacourse/mission-utils';
import { IN_GAME_MESSAGE } from '../src/constants.js';
import Car from './Car.js';
import Race from './Race.js';

class RacingCar {
  async startGame() {
    const car = new Car();
    const race = new Race();

    Console.print(IN_GAME_MESSAGE.gameStartHeader);
    race.startRaceTurn(car);
  }
}

export default RacingCar;
