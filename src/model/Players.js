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

  move() {
    // 시도 횟수만큼 각각의 플레이어가 몇 번 움직일 지 무작위 값 구하기
  }
}
