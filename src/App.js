import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.GAME_PLAYERS = [];
    this.GAME_ROUND = 0;
    this.GAME_ROUND_RESULT = {};
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
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
    } catch (error) {
      throw error;
    }
  }

  // 라운드 당 진행할 로직
  makeGameRoundData() {
    this.GAME_PLAYERS.forEach((player) => {
      const PLAYER_NUM = Random.pickNumberInRange(0, 9);
      if (PLAYER_NUM >= 4) {
        if (this.GAME_ROUND_RESULT[player] === undefined) {
          this.GAME_ROUND_RESULT[player] = '-';
        } else {
          this.GAME_ROUND_RESULT[player] += '-';
        }
      }
    });
  }

  // 라운드 출력 형식
  printRoundResult() {
    for (const [player, result] of Object.entries(this.GAME_ROUND_RESULT)) {
      Console.print(`${player} : ${result}`);
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
    let maxResult = 0;
    let winnerList = [];
    const GAME_TOTAL_RESULT = Object.entries(this.GAME_ROUND_RESULT);

    maxResult = Math.max(...Object.values(this.GAME_ROUND_RESULT));

    GAME_TOTAL_RESULT.forEach((gameResult) => {
      if (gameResult[1].length === maxResult) {
        winnerList.push(gameResult[0]);
      }
    });

    Console.print(`최종 우승자 : ${winnerList.join(', ')}`);
  }
}

export default App;
