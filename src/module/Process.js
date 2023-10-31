import { MissionUtils } from '@woowacourse/mission-utils';

const moveCar = carData => {
  const moveCarData = carData;
  Object.keys(carData).forEach(name => {
    const randNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randNumber >= 4) {
      moveCarData[name] += '-';
    }
  });
  return moveCarData;
};

export default moveCar;
