export default class Players {
  #tryCount = 0;
  #players = [];

  addPlayer(player) {
    this.#players.push(player);
  }

  getPlayers() {
    return this.#players;
  }
}
