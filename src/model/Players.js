import { Random } from '@woowacourse/mission-utils';

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

  generateRandomNumber() {
    return Random.pickNumberInRange(
      GAME_RULL.START_PICK_NUMBER,
      GAME_RULL.END_PICK_NUMBER,
    );
  }

  // 모든 플레이어의 랜덤 넘버를 돌리게 한다.
  // 4이상이 뜨는 유저는 move count를 1 증가 시키도록 한다.
  // 그리고 무브 카운트 만큼 - 를 출력한다.

  move() {
    // 시도 횟수만큼 각각의 플레이어가 몇 번 움직일 지 무작위 값 구하기
  }
}
