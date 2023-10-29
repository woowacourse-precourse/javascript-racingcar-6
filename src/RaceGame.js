import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import User from './User.js';
import MESSAGE from './constants/message.js';

class RaceGame {
  constructor() {
    this.user = new User();
  }

  async racePreparation() {
    const racingCarList = await this.user.getRacingCarList();
    const raceNumber = await this.user.getRaceNumber();
    return {
      carList: racingCarList.map(carName => new Car(carName)),
      raceNumber,
    };
  }

  async racingStart() {
    const { carList, raceNumber } = await this.racePreparation();
    let i = 1;
    Console.print(MESSAGE.raceResult);
    while (i <= raceNumber) {
      carList.forEach(racingCar => {
        racingCar.randomGoAndStop();
        racingCar.getCurrentScore();
      });
      Console.print('\n');
      i += 1;
    }

    this.racingResult(carList);
  }

  racingResult(racingCarList) {
    const winnerCar = racingCarList
      .sort((prevCar, curCar) => curCar.score.length - prevCar.score.length)
      .filter(car => car.score.length === racingCarList[0].score.length)
      .map(car => car.name)
      .join(', ');

    Console.print(MESSAGE.raceWinner + winnerCar);
  }
}

export default RaceGame;
