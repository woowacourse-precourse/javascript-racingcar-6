import { Console } from "@woowacourse/mission-utils";
import Validate from "../controllers/Validate.js";
class CarModel {
  static INPUT_CARNAME_MESSAGE =
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
  constructor() {
    this.validate = new Validate();
  }
  async startGame() {
    const inputCarName = await Console.readLineAsync(
      CarModel.INPUT_CARNAME_MESSAGE,
    );
    const carNames = inputCarName.split(",");
    this.validate.checkCarName(carNames);
    const carList = {};
    carNames.forEach((name) => {
      carList[name] = 0;
    });
    return carList;
  }
}

export default CarModel;
