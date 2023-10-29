import { Random, Console } from '@woowacourse/mission-utils';
import CreateCarMoveCount from "./RandomNumber.js";

class MoveCar {
  constructor() {
  }

  carMoveCompare() {
    const createMovePoint = new CreateCarMoveCount();
    const showMovePoint = createMovePoint.createRandomNumber();
    console.log(showMovePoint);
    if (showMovePoint >= 4) {
      Console.print('이동');
    }

    if (showMovePoint <= 3) {
      Console.print('멈춤');
    }
  }
}

export default MoveCar