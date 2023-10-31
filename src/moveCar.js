import { Random } from '@woowacourse/mission-utils';

function moveCar(carCount) {
  for (let i = 0; i < carCount.length; i += 1) {
    const carNumber = Random.pickNumberInRange(1, 9);
    if (carNumber >= 4) {
      carCount[i] += 1;
    }
  }
}

export default moveCar;