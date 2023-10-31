import { Random } from "@woowacourse/mission-utils";

class CarRacingModel {
  constructor() {
    this.carData = [];
    this.trialNumber = 0;
  }
  setCarData(carNames) {
    this.carData = carNames.split(",").map((name) => [name, 0]);
  }
  getCarData() {
    return this.carData;
  }
  setTrialNumber(num) {
    this.trialNumber = num;
  }
  getTrialNumber() {
    return this.trialNumber;
  }

  moveOrStay(carData) {
    carData.forEach((carData) => {
      let isMove = Random.pickNumberInRange(0, 9) < 5 ? true : false;
      if (isMove) {
        carData[1] += 1;
      }
    });
  }
}
export default CarRacingModel;
