import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.players = [];
    this.moveAttempts = 0;
  }

  async play() {
    this.getPlayerName();
    this.getPlayerInputRacingRounds();
    
  }

  async getPlayerName() {
    const PLAYER_NAME = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)')
    const PLAYER_NAME_SPLIT = PLAYER_NAME.split(',').map(name => name.trim());

    if (PLAYER_NAME_SPLIT.some(name => name.length > 5 || name.length === 0)) {
      throw new Error('[ERROR] 이름은 1자 이상 5자 이하만 가능합니다.')
    }

    this.players = [...this.players, ...PLAYER_NAME_SPLIT];
  }

  async getPlayerInputRacingRounds() {
    const ROUNDS = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?')
    const ROUNDSNUMBER = parseInt(ROUNDS, 10);

    if (isNaN(ROUNDSNUMBER)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.')
    }

    this.moveAttempts = ROUNDSNUMBER;
  }

}
export default App;
