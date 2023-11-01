import { Console } from "@woowacourse/mission-utils";

class ConsoleView {
  static MOVE_LINE = "-";

  // 자동차의 전진현황을 출력하는 함수
  printRaceResult(carList) {
    for (const car in carList) {
      Console.print(`${car} : ${ConsoleView.MOVE_LINE.repeat(carList[car])}`);
    }
    Console.print("");
  }
}
export default ConsoleView;
