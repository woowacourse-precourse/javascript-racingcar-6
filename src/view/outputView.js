// @ts-check
import { Console } from "@woowacourse/mission-utils";
import { SYMBOL, MESSAGE } from "../constants/constants";
import { CarsDto } from "../domain/dto/carsDto";

class OutputView {
  /**
   * @type {boolean}
   */
  #isFirstCall = true;

  /**
   *
   * @param {CarsDto} CarsDto
   * @description - 각 라운드의 결과를 출력
   */
  printRoundResult(CarsDto) {
    this.#printStartMessageWhenFirstCall();

    CarsDto.cars.forEach(({ name, distance }) => {
      Console.print(`${name} : ${"-".repeat(distance)}`);
    });
    Console.print("");
  }

  printWinner() {
    // const winners = cars.join(",");
    // Console.print(MESSAGE.GAME_RESULT + `${winners}`);
  }
  /**
   * @returns {void}
   */

  #printStartMessageWhenFirstCall() {
    if (this.#isFirstCall) {
      Console.print("\n실행결과");
      this.#isFirstCall = false;
    }
  }
}

export default OutputView;
