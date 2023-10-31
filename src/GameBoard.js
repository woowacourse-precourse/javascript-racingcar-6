import { Console } from "@woowacourse/mission-utils";

class GameBoard {
  constructor(cars) {
    this.cars = cars;
  }

  printResult() {
    this.cars.forEach((car) => {
      Console.print(`${car.name} : ${car.path.join("")}`);
    });
    Console.print(`\n`);
  }

  printWinner() {
    let winnerScore = 0;
    const winner = [];

    this.cars.forEach((car) => {
      if (car.path.length > winnerScore) {
        winnerScore = car.path.length;
      }
    });

    this.cars.forEach((car) => {
      if (car.path.length === winnerScore) {
        winner.push(car.name);
      }
    });

    Console.print(`최종 우승자 : ${winner.join()}`);
  }
}

export default GameBoard;
