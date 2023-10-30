import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from "../constant/message.js";

const consoleControl = {
  async readCarName() {
    return await Console.readLineAsync(INPUT_MESSAGE.CAR_NAME);
  },
  async readTryCount() {
    return await Console.readLineAsync(INPUT_MESSAGE.TRY_COUNT);
  },

  printGameStart() {
    Console.print(OUTPUT_MESSAGE.RESULT);
  },
  printWinner(winner) {
    Console.print(`${OUTPUT_MESSAGE.WINNER}${winner}`);
  },
  printResult(car, carMove) {
    Console.print(`${car} : ${carMove}`);
  },
  printNewLine() {
    Console.print(OUTPUT_MESSAGE.NEWLINE);
  },
};

export default consoleControl;
