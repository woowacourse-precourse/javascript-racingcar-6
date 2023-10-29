import { Console } from "@woowacourse/mission-utils";

class User {
  #carsName = [];
  #attempts;

  async inputCarsNameAndAttempts() {
    await this.inputCarsName();
    await this.inputNumberOfAttempts();
  }

  async inputCarsName() {
    try {
      const input = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      this.#carsName = input.split(",");
    } catch (error) {
      throw error;
    }
  }

  async inputNumberOfAttempts() {
    try {
      const input = await Console.readLineAsync("시도할 회수는 몇 회인가요?\n");
      this.#attempts = input;
    } catch (error) {
      throw error;
    }
  }

  getCarsName() {
    return this.#carsName;
  }

  getAttempts() {
    return this.#attempts;
  }
}

export default User;
