import { Console } from '@woowacourse/mission-utils';

class RacingGame {
  statusMark = '-';

  async getRacingCount() {
    const racingCount = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?'
    );
    return Number(racingCount);
  }

  playRacing(carsArray) {
    carsArray.forEach((car) => car.move());
  }

  showGameStatus(carsArray) {
    carsArray.forEach((car) => {
      Console.print(`${car.name} : ${this.statusMark.repeat(car.location)}`);
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
