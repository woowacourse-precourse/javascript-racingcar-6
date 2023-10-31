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

  makeRandomNum() {
    return Random.pickNumberInRange(0, 9);
  }
  makeResultByNum(car, randomNum) {
    randomNum >= 4 ? this.carsWithMoveNum[car]++ : null;
    return "-".repeat(this.carsWithMoveNum[car]);
  }

  playAllRounds(round, carArr) {
    let currentRound = 0;
    while (currentRound < round) {
      carArr.forEach((car, index) => {
        const randomNum = this.makeRandomNum();
        const printLineByMove = this.makeResultByNum(car, randomNum);
        Console.print(`${carArr[index]} : ${printLineByMove}`);
      });
      Console.print("");
      currentRound++;
    }
  }

  selectWinner(carArr) {
    let winnersArr = [];
    carArr.forEach((car) => {
      if (!winnersArr.length) {
        winnersArr.push(car);
      } else if (
        this.carsWithMoveNum[winnersArr] === this.carsWithMoveNum[car]
      ) {
        winnersArr.push(car);
      } else if (
        this.carsWithMoveNum[winnersArr[0]] < this.carsWithMoveNum[car]
      ) {
        winnersArr.length = 0;
        winnersArr.push(car);
      } else {
      }
    });
    return winnersArr;
  }
}

export default GameController;
