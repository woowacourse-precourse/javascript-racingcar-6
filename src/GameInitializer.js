import { MissionUtils } from "@woowacourse/mission-utils";
import { Car } from "./Car";
import { GameOptions } from "./GameOptions.js";

export class GameInitializer {
  
  static async readGameOptionsFromuser() {
    const cars = await GameInitializer.#readCarNames();
    const totalMoves = await GameInitializer.#readTotalMoves();

    return new GameOptions(cars, totalMoves);
  }

  static async #readTotalMoves() {
    const input = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    if (!input || typeof input !== "string") {
      throw new Error("[ERROR] 시도할 횟수는 숫자여야 합니다.");
    }

    const converted = Number(input);
    if (converted === NaN) {
      throw new Error("[ERROR] 시도할 횟수는 숫자여야 합니다.");
    }
    
    return converted;
  }

  static async #readCarNames() {
    const input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    if (!input || typeof input !== "string") {
      throw new Error("[ERROR] 자동차 이름은 문자열을 입력해주세요");
    }

    const carNames = input.split(",").map((name) => new Car(name));
    
    for (const name of carNames) {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5글자 이하여야 합니다");
      }
    }

    return carNames;
  }
}
