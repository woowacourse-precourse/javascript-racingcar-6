import { MissionUtils } from '@woowacourse/mission-utils';
import { CARS } from '../Constants.js';
import Validation from '../validation/Validation.js';

class GameUtil {
  constructor() {}
  
  // ','로 문자열 split하고, 각 자동차이름 검증
  splitInput(input) {
    const CAR_NAMES = input.split(',');
    Validation.validateCarNames(CAR_NAMES);
    return CAR_NAMES;
  }

  // 각 자동차의 전진횟수 저장하는 메소드(자동차 전진횟수 저장)
  storeMovingForward(index) {
    if (this.isMovingForward()) {
      CARS[index].forwardNumber += 1;
    }
  }

  // 각 자동차에서 4이상의 값이 나왔을 때 전진하였음을 반환하는 메소드
  isMovingForward() {
    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);
    if (RANDOM_NUMBER >= 4) {
      return true;
    }
    return false;
  }

  // 가장 큰 전진횟수를 반환
  maxForwardNumber() {
    return CARS.reduce(
      (maxForwardNumber, currentcar) =>
        Math.max(maxForwardNumber, currentcar.forwardNumber),
      0
    );
  }

  // 전진횟수로 차 찾기
  findCarsWithForwardNumber(forwardNumber) {
    const CARS_WITH_FORWARD_NUMBER = CARS.filter((car) => car.forwardNumber === forwardNumber)
    return CARS_WITH_FORWARD_NUMBER;
  }

  //공동우승시 ',' 출력하는 메소드
  commaGenerator(index, length) {
    if (Number(index) !== length) {
      return ', ';
    }
    return '';
  }

  // 공동우승한 차의 이름들 반환
  getSharedVictoryCarNames(winnerCars) {
    let winnerCarNames = '';
    for (let index in winnerCars) {
      winnerCarNames += winnerCars[index].carName;
      winnerCarNames += this.commaGenerator(index, winnerCars.length - 1);
    }
    return winnerCarNames;
  }
}
export default GameUtil;
