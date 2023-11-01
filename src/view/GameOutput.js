import { Console } from "@woowacourse/mission-utils";

export class GameOutput {
  static printDistance(carObject) {
    Console.print(`${carObject.name} : ${"-".repeat(carObject.distance)}`);
  }
  static printResult() {
    Console.print(`실행 결과`);
  }
  static printEnter() {
    Console.print(` `);
  }
  static printWinner(winnerNameArray) {
    Console.print(`최종 우승자 : ${winnerNameArray.join(", ")}`);
  }
}
