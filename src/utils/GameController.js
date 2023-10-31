import { Console, Random } from "@woowacourse/mission-utils";

class GameController {
  constructor() {
    this.carsWithMoveNum = {};
  }

  makeCarsObjWithNum(carArr) {
    carArr.forEach((car) => {
      this.carsWithMoveNum[car] = 0;
    });
  }

  moveAndMakeResult(car) {
    const randomNum = Random.pickNumberInRange(0, 9);
    randomNum >= 4 ? this.carsWithMoveNum[car]++ : null;
    return "-".repeat(this.carsWithMoveNum[car]);
  }

  playAllRounds(round, carArr) {
    let currentRound = 0;
    while (currentRound < round) {
      carArr.forEach((car, index) => {
        const printLineByMove = this.moveAndMakeResult(
          car,
          this.carsWithMoveNum,
        );
        Console.print(`${carArr[index]} : ${printLineByMove}`);
      });
      Console.print("");
      currentRound++;
    }
  }

  selectWinner(cars) {
    let winnersArr = [];
    cars.forEach((car) => {
      if (!winnersArr.length) {
        winnersArr.push(car);
      } else if (
        this.carsWithMoveNum[winnersArr] === this.carsWithMoveNum[car]
      ) {
        winnersArr.push(car);
      } else if (this.carsWithMoveNum[winnersArr] < this.carsWithMoveNum[car]) {
        winnersArr.length = 0;
        winnersArr.push(car);
      } else {
      }
    });
    return winnersArr;
  }
}

export default GameController;
