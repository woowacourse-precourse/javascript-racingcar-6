import Car from './Car.js';
import User from './User.js';
import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants/message.js';
import { RACE } from './constants/constants.js';

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
    Console.print(MESSAGE.raceResult);

    for (let i = 1; i <= raceNumber; i += 1) {
      carList.forEach(racingCar => {
        racingCar.randomGoAndStop();
        racingCar.getCurrentScore();
      });
      Console.print(RACE.newLineMark);
    }

    this.racingResult(carList);
  }

  racingResult(carList) {
    const winnerCar = carList
      .sort(
        (previousCar, currentCar) =>
          currentCar.score.length - previousCar.score.length,
      )
      .filter(car => car.score.length === carList[0].score.length)
      .map(car => car.name)
      .join(RACE.winnerSeparateMark);

    Console.print(MESSAGE.raceWinner + winnerCar);
  }
}

export default RaceGame;
