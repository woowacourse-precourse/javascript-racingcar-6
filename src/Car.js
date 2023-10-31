import { MissionUtils } from '@woowacourse/mission-utils';

export default class Car {
  setCarInfo(carName) {
    const carInfo = { name: carName, forwardCount: 0 };
    return carInfo;
  }

  moveCar(carName, carInfoList) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    const currentCar = carInfoList.find((car) => car.name === carName);
    if (randomNumber > 3) {
      currentCar.forwardCount += 1;
    }
  }
}
