import { MissionUtils } from '@woowacourse/mission-utils';
import RacingGame from './RacingGame';

class App {
  async play() {
    MissionUtils.Console.print('자동차 경주 게임을 시작합니다.');

    // TODO: Mission 1: 자동차 생성 및 이름 부여 메서드입니다.
    const carNames = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요 (이름은 쉼표(,)로 구분):',
    );

    // TODO: Mission 2: 이동 시도 횟수 입력 메서드입니다.
    const totalAttempts = parseInt(
      await MissionUtils.Console.readLineAsync('시도할 횟수를 입력하세요:'),
      10,
    );

    // TODO: Mission 5: 오류 처리 메서드입니다.
    // 예외 처리: 입력 값이 부적절한 경우
    if (!carNames || carNames.trim() === '') {
      throw new Error('[ERROR] 자동차 이름은 필수 입력 항목입니다.');
    }

    // 예외 처리: 시도 횟수가 유효하지 않은 경우
    if (Number.isNaN(totalAttempts) || totalAttempts <= 0) {
      throw new Error('[ERROR] 시도 횟수는 양의 정수여야 합니다.');
    }

    const game = new RacingGame(carNames, totalAttempts);
    game.playGame();

    const winners = game.determineWinner();
    MissionUtils.Console.print(`최종 우승자: ${winners.join(', ')}`);
  }
}

export default App;
