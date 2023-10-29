import { Console } from "@woowacourse/mission-utils";

class User {
  #carsName = [];

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

  getCarsName() {
    return this.#carsName;
  }
}

export default User;
