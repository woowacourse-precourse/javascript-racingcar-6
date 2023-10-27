import { Console } from "@woowacourse/mission-utils";
import { validPlayerInput, validTryInput } from "./validInput.js";

class RacingCar {
  async init() {
    const playerInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const tryInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const players = playerInput.replace(/\s/g, "").split(",");
  }
}

export default RacingCar;
