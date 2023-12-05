import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  startGame() {
    this.printNewLine();
    Console.print("실행 결과");
  },
  printNewLine() {
    Console.print("");
  },
  printProcess(car) {
    const { name, position } = car.getCarInfo();
    Console.print(`${name}: ${"-".repeat(position)}`);
  },
  printWinner(winner) {
    Console.print(`최종 우승자 : ${winner}`);
  },
};

export default OutputView;
