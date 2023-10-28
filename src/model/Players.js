import { Random } from '@woowacourse/mission-utils';
import { GAME_RULL } from '../constants/gameRules.js';

export default class Players {
  #tryCount = 0;
  #players = [];

  addPlayer(player) {
    this.#players.push(player);
  }

  getPlayers() {
    return this.#players;
  }

  setTryCount(tryCount) {
    this.#tryCount = tryCount;
  }

  getTryCount() {
    return this.#tryCount;
  }

  generateRandomNumber() {
    return Random.pickNumberInRange(
      GAME_RULL.START_PICK_NUMBER,
      GAME_RULL.END_PICK_NUMBER,
    );
  }

  setMoveCount() {
    this.#players.forEach((player) => {
      const pickedNumber = this.generateRandomNumber();
      if (pickedNumber >= GAME_RULL.MOVE_CONDITION_COUNT) {
        player.increaseMoveCount();
      }
    });

    // 디버깅용
    this.#players.forEach((player) => {
      console.log({ player }, player.getMoveCount());
    });
  }
}
