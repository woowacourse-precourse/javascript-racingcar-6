import { Console, Random } from '@woowacourse/mission-utils';
import ErrorCheck from './errorCheck.js';
import {
  PLAYER_NAME_ASK_MSG,
  ATTEMPT_NUM_ASK_MSG,
  FINAL_WINNER_MSG,
  RESULT_MSG,
  FORWARD_CONDITIONS,
  MIN_RANDOM,
  MAX_RANDOM
} from './constant.js';

class App {
  async playerInfoInput() {
    const inputName = await Console.readLineAsync(PLAYER_NAME_ASK_MSG);
    const playerList = inputName.split(',').map(str => str.trim());
    ErrorCheck.playerNumberCheck(playerList);

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

  playOneRound(player, playerObject) {
    const goForward = Random.pickNumberInRange(MIN_RANDOM, MAX_RANDOM);
    if (goForward >= FORWARD_CONDITIONS) {
      playerObject[player] += 1;
    }
    Console.print(`${player} : ${'-'.repeat(playerObject[player])}`);
  }

  gamePlay(playerObject, tryNum, objectKeyList) {
    for (let i = 0; i < tryNum; i += 1) {
      objectKeyList.forEach((player) => this.playOneRound(player, playerObject));
      Console.print('');
    }
  }

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
    ErrorCheck.numberCheck(numberOfAttempts);

    Console.print(`\n${RESULT_MSG}`);

    this.gamePlay(players, numberOfAttempts, playersKeyList);
    this.findWinner(players, playersKeyList);
  }
}

export default App;
