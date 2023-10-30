import { MissionUtils } from "@woowacourse/mission-utils";

class GameUi {
  constructor() {
  }

  // 사용자가 차이름을 입력
  async askCarName() {
    const CAR_NAMES_INPUT = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return CAR_NAMES_INPUT;
  }

  // 사용자가 시도할 횟수를 입력
  async askAttemptCount() {
    const ATTEMPT_COUNT = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    return ATTEMPT_COUNT;
  }

  printeachRaceGame() {
    // TODO: 각 레이스당 자동차들의 전진 현황 출력
  }
}
export default GameUi;
