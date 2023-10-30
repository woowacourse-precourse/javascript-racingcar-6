import { Console } from '@woowacourse/mission-utils';
import { Message } from './Message.js';
class Race {
  constructor(cars) {
    this.cars = cars;
  }

  playRound() {
    this.cars.forEach((car) => {
      car.moveForwardIfPossible();
    });
  }

  displayCars() {
    this.cars.forEach((car) => {
      Console.print(`${car.name} : ${car.displayPosition()}`);
    });
    Console.print('\n');
  }

  start(attemptsNumber) {
    for (let i = 0; i < attemptsNumber; i++) {
      this.playRound();
      this.displayCars();
    }

    this.printWinner(this.cars);
  }

  printWinner(finalResult) {
    const sortResult = finalResult.sort((a, b) => b.position - a.position);
    const winnerString = this.makeWinnerString(sortResult);

    Console.print(`${Message.WINNER}${winnerString}`);
  }

  makeWinnerString(carList) {
    const winner = [];
    winner.push(carList[0].name);

    for (let i = 0; i < carList.length - 1; i++) {
      if (carList[i].position == carList[i + 1].position) {
        winner.push(carList[i + 1].name);
      } else {
        break;
      }
    }

    return winner.join(', ');
  }
}
export { Race };
