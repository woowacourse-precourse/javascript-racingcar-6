import { MissionUtils } from '@woowacourse/mission-utils';

const moveCar = carData => {
  Object.keys(carData).forEach(name => {
    const randNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randNumber >= 4) {
      carData[name] += '-';
    }
  });
};

export default moveCar;
