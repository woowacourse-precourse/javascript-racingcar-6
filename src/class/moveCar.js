import { Random, Console } from '@woowacourse/mission-utils';
import CreateCarMoveCount from "./randomNumber.js";
import InputCarMoveCount from './gameStart.js';

class MoveCar {
  constructor(carNames) {
    this.carNames = carNames;
    this.positions = new Array(carNames.length).fill(0);
  }

  carMoveCompare() {
    // const createMovePoint = new CreateCarMoveCount();
    // const getMovePoint = createMovePoint.createRandomNumber();
    const getMovePoint = Random.pickNumberInRange(0, 9);
    // console.log(getMovePoint);
    return getMovePoint >= 4;
  }

  startRacing(tryCount) {
    Console.print('\n실행 결과');
    for (let i = 0; i < tryCount; i++) {
      // Console.print(`\n${i + 1}회`);

      const moveResults = this.carNames.map((carName, index) => {
        const isMoving = this.carMoveCompare();
        if (isMoving) {
          this.positions[index]++;
        }
        return isMoving ? '-' : '';
      });

      this.carNames.forEach((carName, index) => {
        Console.print(`${carName} : ${'-'.repeat(this.positions[index])}`);
      });
      Console.print('\n');
    }
  }
}


export default MoveCar