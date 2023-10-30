import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.GAME_PLAYERS = [];
    this.GAME_ROUND = 0;
  }
  async play() {}

  async gameStart() {
    try {
      const GAME_PLAYER_INPUT_REGEX = /^([a-zA-Z가-힣]{1,5},)*[a-zA-Z가-힣]{1,5}$/i;
      // 이름 입력받기
      const GAME_PLAYER_INPUT = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분'
      );

      if (GAME_PLAYER_INPUT_REGEX.test(GAME_PLAYER_INPUT)) {
        this.GAME_PLAYERS = GAME_PLAYER_INPUT.split(',');
      } else {
        throw new Error('[ERROR] 경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분');
      }

      // 게임 횟수 입력받기
      this.GAME_ROUND = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
      if (isNaN(this.GAME_ROUND)) {
        throw new Error('숫자가 잘못된 형식입니다.');
      }
    } catch (error) {
      throw error;
    }
  }
}

export default App;
