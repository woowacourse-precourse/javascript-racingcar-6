import { Random } from "@woowacourse/mission-utils";
class RaceController {
  static RESULT_NOTIFICATION = "실행 결과";

  createNumber = (carList) => {
    for (const car in carList) {
      const moveNum = Random.pickNumberInRange(0, 9);
      carList[car] = moveNum;
    }
    return carList;
  };

  moveCar = (inputChance, carList) => {
    for (let i = 0; i < inputChance; i++) {
      const number = this.createNumber(carList);
    }
  };
}

export default RaceController;
