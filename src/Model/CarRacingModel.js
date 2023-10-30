import { Random } from "@woowacourse/mission-utils";

class CarRacingModel {
  constructor() {
    this.namesAndDistances = [];
    this.trialNumber = 0;
  }
  setNamesAndDistances(carNameString) {
    this.nameAndDistances = carNameString.split(",").map((name) => [name, 0]);
  }
  getNamesAndDistances() {
    return this.nameAndDistances;
  }
  setTrialNumber(num) {
    this.trialNumber = num;
  }
  getTrialNumber() {
    return this.trialNumber;
  }

  moveOrStay(car) {
    for (let i = 0; i < car.length; i++) {
      let isMove = Random.pickNumberInRange(0, 9) < 5 ? true : false;
      if (isMove) {
        car[i][1] += 1;
      }
    }
  }
}
export default CarRacingModel;
