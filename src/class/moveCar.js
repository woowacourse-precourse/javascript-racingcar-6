import { Console } from '@woowacourse/mission-utils';
import { CONDITION_POINT, PLAY_GAME } from '../Constants.js'
import CreateCarMoveCount from './randomNumber.js';
class MoveCar {
  constructor(carNames) {
    this.carNames = carNames;
    this.positions = new Array(carNames.length).fill(0);
  }

  carMoveCompare() {
    const createRandomNumber = new CreateCarMoveCount();
    const getMovePoint = createRandomNumber.createRandomNumber();
    return getMovePoint >= CONDITION_POINT.MOVE_MIN_POINT;
  }

  startRacing(tryCount) {
    Console.print(PLAY_GAME.RESULT);

    for (let i = 0; i < tryCount; i++) {
      const moveResults = this.carNames.map((carName, index) => {
        const isMoving = this.carMoveCompare();
        if (isMoving) {
          this.positions[index]++;
        }
        return isMoving ? PLAY_GAME.MOVE_RESULT : '';
      });
      this.carNames.forEach((carName, index) => {
        Console.print(`${carName} : ${'-'.repeat(this.positions[index])}`);
      });
      Console.print('\n');
    }
    const winners = this.resultGame();
    Console.print(PLAY_GAME.WINNER + winners.join(', '));
  }

  resultGame() {
    const maxDistance = Math.max(...this.positions);
    const winners = this.carNames.filter((carName, index) => this.positions[index] === maxDistance);
    return winners;
  }
}


export default MoveCar