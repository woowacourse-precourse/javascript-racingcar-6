import { Random, Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./Constant.js";

class App {
  constructor() {
    this.carsStatus = [];
    this.tryNum = 0;
  }

  validate_carNames(carsStatus) {
    if (carsStatus === undefined) {
      throw new Error("[ERROR] 자동차 이름을 입력해주세요.");
    }
    carsStatus
      .split(",")
      .map((car) => car.trim())
      .forEach((car) => {
        if (car.length > 5) {
          throw new Error("[ERROR] 자동차 이름의 길이가 5 초과 입니다.");
        } else if (car.includes(" ")) {
          throw new Error("[ERROR] 자동차 이름에 빈 칸이 있습니다.");
        }
      });
  }

  validate_tryNumber(tryNum) {
    if (Number.isInteger(tryNum)) {
      throw new Error("[ERROR] 정수로 된 숫자를 입력해주세요.");
    } else if (tryNum <= 0) {
      throw new Error("[ERROR] 양수를 입력해주세요.");
    }
  }

  async play() {}
}

export default App;
