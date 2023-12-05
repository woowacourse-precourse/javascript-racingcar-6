import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE, MOVE } from "../constant/constant.js";

const OutputView = {
  printNewLine() {
    Console.print(OUTPUT_MESSAGE.newLine);
  },
  startGame() {
    this.printNewLine();
    Console.print(OUTPUT_MESSAGE.startGame);
  },
  printProcess(car) {
    const { name, position } = car.getCarInfo();
    Console.print(`${name} : ${MOVE.repeat(position)}`);
  },
  printWinner(winner) {
    Console.print(`${OUTPUT_MESSAGE.winner} : ${winner}`);
  },
};

export default OutputView;
