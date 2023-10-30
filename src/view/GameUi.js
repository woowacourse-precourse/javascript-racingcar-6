import { MissionUtils } from '@woowacourse/mission-utils';
import { CARS } from '../Constants.js';
class GameUi {
  constructor() {}

  // 사용자가 차이름을 입력
  async askCarName() {
    const CAR_NAMES_INPUT = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    return CAR_NAMES_INPUT;
  }

  // 사용자가 시도할 횟수를 입력
  async askAttemptCount() {
    const ATTEMPT_COUNT = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
    return ATTEMPT_COUNT;
  }
  // 레이스 게임 실행 결과 출력 안내 메시지 출력
  printResultMessage() {
    MissionUtils.Console.print('실행 결과');
  }

  // 각 레이스 게임당 자동차들의 전진현황 출력
  printeachRaceGame() {
    for (let carIndex in CARS) {
      const CAR_NAME = `${CARS[carIndex].carName}`
      const CAR_FORWARD_NUMBER = Number(CARS[carIndex].forwardNumber);
      const FORWARDED = `${'-'.repeat(CAR_FORWARD_NUMBER)}`;
      MissionUtils.Console.print(`${CAR_NAME} : ${FORWARDED}`);
    }
    MissionUtils.Console.print('');
  }
}
export default GameUi;
