import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../constants/gameMessage.js";
import { CarNameGenerator } from "../utils/CarNameGenerator.js";


export default class OutputView {
  printGameStartMessage() {
    this.#print(GAME_MESSAGE.START);
  }

  async printCarName() {
    const carNames = await CarNameGenerator();
    this.#print(carNames);
  }

  #print(text) {
    Console.print(text);
  }
}