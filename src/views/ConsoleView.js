import { Console } from "@woowacourse/mission-utils";
class ConsoleView {
  static MOVE_LINE = "-";

  printRaceResult(carList) {
    for (const car in carList) {
      Console.print(`${car} : ${ConsoleView.MOVE_LINE.repeat(carList[car])}`);
    }
    Console.print("");
  }
}
export default ConsoleView;
