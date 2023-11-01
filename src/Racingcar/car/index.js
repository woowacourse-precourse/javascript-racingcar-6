import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  static initializeCarData(carNames) {
    return carNames.map((name) => ({ name, position: 0 }));
  }

  static performSingleRace(carData) {
    carData.forEach((car) => {
      const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomValue >= 4) {
        car.position += 1;
      }
    });
  }
}

export default Car;
