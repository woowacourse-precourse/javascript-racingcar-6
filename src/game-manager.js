class GameManager {
  constructor() {
    this.playerGroup = [];
  }

  registerPlayer(player) {
    this.playerGroup.push(player);
  }
}

export default GameManager;
