import { Console } from "@woowacourse/mission-utils";

import InputCommand from "./InputView.js";
import { GAME_MESSAGE } from "../constants/gameMessage.js";


export default class OutputView {
  printGameStartMessage() {
    this.#print(GAME_MESSAGE.START);
  }

  async printCarName() {
    const inputCommand = new InputCommand(); 
    try {
      const carNames = await inputCommand.carName(); 
      this.#print(carNames);
    } catch (error) {
      this.#print(error.message);
    }
  }

  #print(text) {
    Console.print(text);
  }
}