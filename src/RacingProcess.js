import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class Race {
  createCarArray(carNameArr) {
    let carArr = [];
    carNameArr.forEach((element) => {
      carArr.push(new Car(element));
    });
    return carArr;
  }

  oneRound(carArr) {
    carArr.forEach((car) => {
      car.goForward();
      car.showPosition();
    });
  }

  runRace(carArr, roundCount) {
    for (let i = 0; i < roundCount; i++) {
      this.oneRound(carArr);
      Console.print('\n');
    }
  }

  getWinner(carArr) {
    let winners = [];
    let winnerPosition = 0;
    carArr.forEach((car) => {
      if (winnerPosition < car.position) {
        winnerPosition = car.position;
        winners = [car.name];
      } else if (winnerPosition === car.position) {
        winners.push(car.name);
      }
    });
    return winners;
  }
}

export default Race;
