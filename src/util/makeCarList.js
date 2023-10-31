import { MissionUtils, Console } from "@woowacourse/mission-utils";
import carModel from "../model/carModel.js";
import validateCarNames from "./validateData/validateCarName.js";
import enterValue from "./enterValue.js";

async function makeCarList() {
  let cars = [];

  const carNames = await enterValue(
    "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)",
    "string"
  );
  const carNamesArr = carNames.split(",");

  for (let i = 0; i < carNamesArr.length; i++) {
    //자동차 이름 검증
    validateCarNames(carNamesArr[i]);
    const curCar = new carModel(carNamesArr[i], 0, "");
    cars.push(curCar);
  }

  return cars;
}

export default makeCarList;
