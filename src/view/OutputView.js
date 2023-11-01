// @ts-check
import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants";
import { CarsDto } from "../domain/dto/qcarsDto";
import { WinnersDto } from "../domain/dto/qwinnersDto";

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

    CarsDto.cars.forEach((carDto) => {
      Console.print(`${carDto.name} : ${"-".repeat(carDto.distance)}`);
    });
    Console.print("");
  }

  /**
   *
   * @param {WinnersDto} winnersDto
   * @returns {void}
   */

  printWinners(winnersDto) {
    const winnerNamesString = winnersDto.winners
      .map((winner) => winner.winner)
      .join(", ");
    Console.print(`${MESSAGE.GAME_RESULT}${winnerNamesString}`);
  }

  /**
   * @returns {void}
   */

  #printStartMessageWhenFirstCall() {
    if (this.#isFirstCall) {
      Console.print("\n실행 결과");
      this.#isFirstCall = false;
    }
  }
}

export default OutputView;
