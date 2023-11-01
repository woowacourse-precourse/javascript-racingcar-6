import { Console } from "@woowacourse/mission-utils";

import InputView from "./InputView.js";
import { GAME_MESSAGE } from "../constants/gameMessage.js";

const inputView = new InputView(); 
export default class OutputView {
  printGameStartMessage() {
    this.#print(GAME_MESSAGE.START);
  }

  async printCarName() {
    try {
      const carNames = await inputView.carName(); 
      this.#print(carNames);
    } catch (error) {
      this.#print(error.message);
    }
  }

  async printNumberAttempts() {
    this.#print(GAME_MESSAGE.NUMBER_ATTEMPTS);

    const rounds = await inputView.numberAttempts(); 
    this.#print(rounds);
  }
  
  async printExecutionResult() {
    this.#print(GAME_MESSAGE.EXECUTION_RESULT);
  }

  #print(text) {
    Console.print(text);
  }
}