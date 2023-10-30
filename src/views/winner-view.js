import { MissionUtils } from "@woowacourse/mission-utils";

class WinnerView {
  printWinner(winners) {
    const winnerString = winners.join(", ");
    const winnerMessage = `최종 우승자 : ${winnerString}`;

    MissionUtils.Console.print(winnerMessage);
  }
}

export default WinnerView;
