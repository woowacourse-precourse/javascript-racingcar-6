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

    const raceResult = race.proceedRace(car);
    this.endGame(raceResult);
  }

  endGame(raceResult) {
    const maxCarPosition = Math.max(...Object.values(raceResult));
    const winners = Object.keys(raceResult)
      .filter((carName) => raceResult[carName] === maxCarPosition)
      .join(', ');

    Console.print(`${IN_GAME_MESSAGE.gameResultHeader} : ${winners}`);
  }
}

export default RacingCar;
