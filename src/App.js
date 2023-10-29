import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {}

  // TODO : 에러 처리 변수에 담아서 할 것인지 즉각 할 것인지 결정하기
  async gameStart() {
    try {
      // 이름 입력받기
      const GAME_PLAYER_INPUT = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분'
      );
      let gamePlayerInputValid = true;
      if (GAME_PLAYER_INPUT.includes(' ')) {
        gamePlayerInputValid = false;
      } else {
        const GAME_PLAYERS = GAME_PLAYER_INPUT.split(',');
        gamePlayerInputValid = GAME_PLAYERS.every((player) => player.length <= 5);
      }

      if (!gamePlayerInputValid) {
        throw new Error('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분');
      }

      // 게임 횟수 입력받기
      const GAME_ROUND_INPUT = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
      if (isNaN(GAME_ROUND_INPUT)) {
        throw new Error('숫자가 잘못된 형식입니다.');
      }
    } catch (error) {
      throw error;
    }
  }
}

export default App;

