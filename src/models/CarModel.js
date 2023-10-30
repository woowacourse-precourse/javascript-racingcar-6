import { Console } from "@woowacourse/mission-utils";

class CarModel {
  static INPUT_CARNAME_MESSAGE =
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";

  async startGame() {
    const inputCarName = await Console.readLineAsync(
      CarModel.INPUT_CARNAME_MESSAGE,
    );
    this.carList = inputCarName.split(",");
  }
}

export default CarModel;
