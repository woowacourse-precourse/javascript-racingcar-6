import { MissionUtils } from "@woowacourse/mission-utils";

const message = {
  totalRoundQuestion: "시도할 횟수는 몇 회인가요?\n",
};

class RoundInputView {
  async getTotalRound() {
    const totalRound = await MissionUtils.Console.readLineAsync(message.totalRoundQuestion);

    return totalRound;
  }
}

export default RoundInputView;
