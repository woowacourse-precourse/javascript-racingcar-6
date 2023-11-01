import Validate from "./Validate.js";

import { Console } from "@woowacourse/mission-utils";
class Player {
  static INPUT_CARNAME_MESSAGE =
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
  static INPUT_CHANCE_MESSAGE = "시도할 횟수는 몇 회인가요?\n";
  static THE_FIRST_VALIE = 0;
  constructor() {
    this.validate = new Validate();
  }

  // 자동차 이름을 입력받고 반환하는 함수
  async startRace() {
    const inputCarName = await Console.readLineAsync(
      Player.INPUT_CARNAME_MESSAGE,
    );
    const carNames = inputCarName.split(",");
    this.validate.checkCarName(carNames);
    const carList = {};
    carNames.forEach((name) => {
      carList[name] = Player.THE_FIRST_VALIE;
    });
    return carList;
  }

  // 이동 횟수 입력하는 함수
  async inputChance() {
    const inputChance = await Console.readLineAsync(
      Player.INPUT_CHANCE_MESSAGE,
    );
    Console.print("");
    this.validate.checkInput(inputChance);
    return inputChance;
  }
}
export default Player;
