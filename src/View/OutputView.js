import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printNewLine() {
    Console.print("");
  },
  startGame() {
    this.printNewLine();
    Console.print("실행 결과");
  },
  printProcess(car) {
    const { name, position } = car.getCarInfo();
    Console.print(`${name} : ${"-".repeat(position)}`);
  },
  printWinner(winner) {
    Console.print(`최종 우승자 : ${winner}`);
  },
};

export default OutputView;
