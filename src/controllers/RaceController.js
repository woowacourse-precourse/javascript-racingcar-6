import { Random } from "@woowacourse/mission-utils";
class RaceController {
  static RESULT_NOTIFICATION = "실행 결과";

  createNumber = (carList) => {
    const numberList = [];
    for (let i = 0; i < carList.length; i++) {
      numberList.push(Random.pickNumberInRange(0, 9));
    }
    return numberList;
  };

  moveCar = (inputChance, carList) => {
    for (let i = 0; i < inputChance; i++) {
      console.log(this.createNumber(carList));
    }
  };
}

export default RaceController;
