import { MissionUtils, Console } from "@woowacourse/mission-utils";
import carModel from "../model/carModel.js";
import validateCarNames from "./validateData/validateCarName.js";

async function makeCarList() {
  let cars = [];

  const carNames = "zxcv, asdf,qwer"; /*await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)"
  );*/
  const carNamesArr = carNames.split(",");

  for (let i = 0; i < carNamesArr.length; i++) {
    validateCarNames(carNamesArr[i]);
    const curCar = new carModel(carNamesArr[i], 0, 0);
    cars.push(curCar);
  }

  return cars;
}

export default makeCarList;
