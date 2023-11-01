import { Console } from "@woowacourse/mission-utils";

export default class InputView {
  async carName() {
    const MAX_CAR_NAME_LENGTH = 5;

    const result = [];
    const carNames = await this.#readLine();

    try {
      if (carNames.length < MAX_CAR_NAME_LENGTH) {
        carNames.split(",").map((name) => name.trim());
        result.push(carNames);
      }
      return carNames;
    } catch (error) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
    }
  }

  async numberAttempts() {
    const rounds = await this.#readLine();
    return rounds;
  }

  async #readLine(text) {
    try {
      return await Console.readLineAsync(text);
    } catch (error) {
      throw new Error("[ERROR] invalid input");
    }
  }
}
