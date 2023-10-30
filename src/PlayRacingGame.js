import { Console } from "@woowacourse/mission-utils";
import { checkLength, checkSeparator } from "./validation.js";

class PlayRacingGame {
  play() {
    this.getName();
  }
  async getName() {
    const input = await Console.readLineAsync("경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n");

    if (checkSeparator(input)) {
      const names = input.split(",");

      names.map((ele) => {
        checkLength(ele);
      });
    } else {
      checkLength(input);
    }
  }
}

export default PlayRacingGame;
