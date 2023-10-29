import { MissionUtils } from "@woowacourse/mission-utils";

const OutputView = {
  printRaceResult(name, movement) {
    MissionUtils.Console.print(`${name} : ${movement}`);
  },

  printResultMsg() {
    MissionUtils.Console.print(`\n${"실행 결과"}`);
  },

  printWinners(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  },
};

export default OutputView;
