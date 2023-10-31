import { Console, Random } from '@woowacourse/mission-utils';
import {
  INPUT_NUMBER_ERR_MSG,
  PLAYER_NUMBER_ERR_MSG,
  PLAYER_NAME_ASK_MSG,
  ATTEMPT_NUM_ASK_MSG,
  FINAL_WINNER_MSG,
  RESULT_MSG,
  FORWARD_CONDITIONS,
  MIN_PLAYER_NUMBER,
} from './constant.js';

class App {
  static numberCheck(input) {
    if (isNaN(input)) {
      throw new Error(INPUT_NUMBER_ERR_MSG);
    }
  }

  static playerNumberCheck(array) {
    if (array.length < MIN_PLAYER_NUMBER) {
      throw new Error(PLAYER_NUMBER_ERR_MSG);
    }
  }

  async playerInfoInput() {
    const inputName = await Console.readLineAsync(PLAYER_NAME_ASK_MSG);
    const playerList = inputName.split(',').map(str => str.trim());
    App.playerNumberCheck(playerList);

    return playerList;
  }

  // 사용자 객체, 키 리스트 생성
  playerSetting(playerList) {
    const playerObject = {};
    playerList.forEach(playerName => {
      playerObject[playerName] = 0;
    });
    const objectKeyList = Object.keys(playerObject);

    return { playerObject, objectKeyList };
  }

  // 게임 시작 및 출력
  gamePlay(playerObject, tryNum, objectKeyList) {
    for (let i = 0; i < tryNum; i += 1) {
      objectKeyList.forEach(item => {
        const goForward = Random.pickNumberInRange(0, 9);
        if (goForward >= FORWARD_CONDITIONS) {
          playerObject[item] += 1;
        }
        Console.print(`${item} : ${'-'.repeat(playerObject[item])}`);
      });
      Console.print('');
    }
  }

  // 우승자 찾기
  findWinner(playerObject, playersKeyList) {
    const scores = playersKeyList.map(player => playerObject[player]);
    const maxScore = Math.max(...scores);
    const winners = playersKeyList.filter(player => playerObject[player] === maxScore);

    Console.print(`${FINAL_WINNER_MSG} : ${winners.join(', ')}`);
  }

  async play() {
    const playerList = await this.playerInfoInput();
    const { playerObject: players, objectKeyList: playersKeyList } = this.playerSetting(playerList);

    // 시도 횟수 입력
    const numberOfAttempts = Number(await Console.readLineAsync(ATTEMPT_NUM_ASK_MSG));
    App.numberCheck(numberOfAttempts);

    Console.print(`\n${RESULT_MSG}`);

    this.gamePlay(players, numberOfAttempts, playersKeyList);
    this.findWinner(players, playersKeyList);
  }
}

export default App;
