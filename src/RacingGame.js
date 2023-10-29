import { Console } from '@woowacourse/mission-utils';
import Validation from './Validation.js';
import ErrorHandler from './ErrorHandler.js';

class RacingGame {
  SETTINGS = {
    gameStatusMark: '-',
  };

  async getRacingCount() {
    const racingCount = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?'
    );
    const racingCountNumber = Number(racingCount);
    const validation = new Validation();
    const errorHandler = new ErrorHandler();
    if (!validation.isValidRacingCount(racingCountNumber)) {
      errorHandler.throwInvalidRacingCountError();
    }

    return racingCountNumber;
  }

  playRacing(carsArray) {
    carsArray.forEach((car) => car.move());
  }

  showGameStatus(carsArray) {
    const lastStatusIndex = carsArray.length - 1;
    carsArray.forEach((car, index) => {
      let statusString = `${car.name} : ${this.SETTINGS.gameStatusMark.repeat(
        car.location
      )}`;
      if (index === lastStatusIndex) {
        statusString += '\n';
      }

      Console.print(statusString);
    });
  }

  findWinner(carsArray) {
    const initialWinnersArray = [carsArray[0]];
    const targetCarsArray = carsArray.slice(1);
    const winnersArray = targetCarsArray.reduce((fastestCars, targetCar) => {
      const targetFastestCar = fastestCars.pop();
      if (targetFastestCar.location > targetCar.location) {
        return [...fastestCars, targetFastestCar];
      }

      if (targetFastestCar.location === targetCar.location) {
        return [...fastestCars, targetFastestCar, targetCar];
      }

      return [targetCar];
    }, initialWinnersArray);

    return winnersArray;
  }

  announceWinner(winnersArray) {
    const winnersNames = winnersArray.map((winner) => winner.name);
    Console.print(`최종 우승자 : ${winnersNames.join(', ')}`);
  }
}

export default RacingGame;
