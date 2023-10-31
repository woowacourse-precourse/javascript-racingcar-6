import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.players = [];
  }

  async getAndValidatePlayerName() {
    const PLAYER_NAME_INPUT = await this.getPlayerName();
    this.validatePlayerName(PLAYER_NAME_INPUT);
  }

  async getPlayerName() {
    return await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
  }

  validatePlayerName(playerNameInput) {
    const PLAYER_NAME_SPLIT = playerNameInput
      .toString()
      .split(',')
      .map((name) => name.trim());

    if (
      PLAYER_NAME_SPLIT.some((name) => name.length > 5 || name.length === 0)
    ) {
      throw new Error('[ERROR] 이름은 1자 이상 5자 이하만 가능합니다.');
    }

    PLAYER_NAME_SPLIT.forEach((name) => {
      this.players.push({ name, moveAttempts: 0 });
    });
  }

  async getAndValidateRacingRounds() {
    const PLAYER_RACING_ROUNDS_INPUT =
      await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    this.ROUNDS = this.validateRacingRounds(PLAYER_RACING_ROUNDS_INPUT);
  }

  validateRacingRounds(playerInput) {
    const ROUNDS_NUMBER = parseInt(playerInput, 10);
    if (isNaN(ROUNDS_NUMBER) || this.ROUNDS_NUMBER <= 0) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    return ROUNDS_NUMBER;
  }

  findWinner() {
    const MAX_MOVEATTEMPTS = Math.max(
      ...this.players.map((player) => player.moveAttempts),
    );
    const WINNERS = this.players.filter(
      (player) => player.moveAttempts === MAX_MOVEATTEMPTS,
    );
    let raceResult = WINNERS.map((player) => player.name).join(', ');
    return `최종 우승자 : ${raceResult}`;
  }

  playerMoveCount(player) {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      player.moveAttempts++;
    }
  }

  playerStatus(player) {
    return `${player.name} : ${'-'.repeat(player.moveAttempts)}`;
  }

  async play() {
    await this.getAndValidatePlayerName();
    await this.getAndValidateRacingRounds();

    MissionUtils.Console.print('\n실행결과');
    for (let i = 0; i < this.ROUNDS; i++) {
      this.players.forEach((player) => this.playerMoveCount(player));
      this.players.forEach((player) =>
        MissionUtils.Console.print(this.playerStatus(player)),
      );
      MissionUtils.Console.print(''); // 실행 결과 표시에서 필요한 결과 사이 공백
    }

    MissionUtils.Console.print(this.findWinner());
  }
}

export default App;
