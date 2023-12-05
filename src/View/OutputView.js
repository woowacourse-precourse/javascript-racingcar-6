import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  startGame() {
    this.printNewLine();
    Console.print("실행 결과");
  },
  printNewLine() {
    Console.print("");
  },
  printCar(car) {
    const { name, position } = car.getCarInfo();
    Console.print(`${name}: ${"-".repeat(position)}`);
  },
};

export default OutputView;
