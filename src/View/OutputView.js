import { Console } from "@woowacourse/mission-utils";

const OUTPUT_MESSAGE = Object.freeze({
  newLine: "",
  startGame: "실행 결과",
  winner: "최종 우승자",
});

const MOVE = "-";

const OutputView = Object.freeze({
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
});

export default OutputView;
