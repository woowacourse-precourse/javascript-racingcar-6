import { Console } from "@woowacourse/mission-utils";
import { USER_PROMPT } from "./utils/constants.js";

class User {
  #carsName = [];
  #attempts;

  async inputCarsNameAndAttempts() {
    await this.inputCarsName();
    await this.inputNumberOfAttempts();
  }

  async inputCarsName() {
    try {
      const input = await Console.readLineAsync(`${USER_PROMPT.CAR_NAME}\n`);
      this.#carsName = input.split(",");
    } catch (error) {
      throw error;
    }
  }

  async inputNumberOfAttempts() {
    try {
      const input = await Console.readLineAsync(`${USER_PROMPT.ATTEMPTS}\n`);
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
