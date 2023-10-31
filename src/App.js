import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.GAME_PLAYERS = [];
    this.GAME_ROUND = 0;
    this.GAME_ROUND_RESULT = {};
  }

  async play() {
    await this.getUserNameInput();
    await this.getRoundNumInput();
    this.makePlayerInfo();
    this.playGame();
    this.printGameResult();
  }
  // 이름 입력 받기
  async getUserNameInput() {
    try {
      const GAME_PLAYER_INPUT_REGEX = /^([a-zA-Z가-힣]{1,5},)*[a-zA-Z가-힣]{1,5}$/i;
      const GAME_PLAYER_INPUT = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
      );

      if (GAME_PLAYER_INPUT_REGEX.test(GAME_PLAYER_INPUT)) {
        this.GAME_PLAYERS = GAME_PLAYER_INPUT.split(',');
      } else {
        throw new Error('[ERROR] 경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
      }
    } catch (error) {
      throw error;
    }
  }

  // 게임 횟수 입력 받기
  async getRoundNumInput() {
    try {
      this.GAME_ROUND = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
      if (this.GAME_ROUND <= 0 || isNaN(this.GAME_ROUND)) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
    } catch (error) {
      throw error;
    }
  }

  // 게임 플레이어 초기세팅
  makePlayerInfo() {
    this.GAME_PLAYERS.forEach((player) => {
      this.GAME_ROUND_RESULT[player] = 0;
    });
  }

  // 라운드 당 진행할 게임 로직
  makeGameRoundData() {
    for (let [player, result] of Object.entries(this.GAME_ROUND_RESULT)) {
      const PLAYER_NUM = Random.pickNumberInRange(0, 9);
      if (PLAYER_NUM >= 4) {
        result += 1;
        this.GAME_ROUND_RESULT[player] = result;
      }
    }
  }

  // 라운드 출력 형식
  printRoundResult() {
    for (const [player, result] of Object.entries(this.GAME_ROUND_RESULT)) {
      Console.print(`${player} : ${'-'.repeat(result)}`);
    }
    Console.print('\n');
  }

  // 게임 진행
  playGame() {
    Console.print('실행 결과');
    while (this.GAME_ROUND) {
      this.makeGameRoundData();
      this.printRoundResult();
      this.GAME_ROUND -= 1;
    }
  }

  // 게임 결과
  printGameResult() {
    let maxScore = 0;
    let winnerList = [];
    const GAME_TOTAL_RESULT = Object.entries(this.GAME_ROUND_RESULT);

    maxScore = Math.max(...Object.values(this.GAME_ROUND_RESULT));

    GAME_TOTAL_RESULT.forEach((gameResult) => {
      if (gameResult[1] === maxScore) {
        winnerList.push(gameResult[0]);
      }
    });

    Console.print(`최종 우승자 : ${winnerList.join(', ')}`);
  }
}

export default App;
