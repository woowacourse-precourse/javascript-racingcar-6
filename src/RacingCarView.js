import { MissionUtils } from "@woowacourse/mission-utils";

class RacingCarView {
  async getCarNamesInput() {
    return await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) :");
  }

  async getRoundsInput() {
    return await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요? :");
  }

  printRoundResult(result) {
    MissionUtils.Console.print(''); // 결과 사이에 공백을 두는 문장
    result.forEach(res => MissionUtils.Console.print(res));
  }

  printWinners(winners) {
    MissionUtils.Console.print(`최종 우승자: ${winners.join(", ")}`);
  }
}

export default RacingCarView;
