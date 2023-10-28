class GameManager {
  constructor() {
    this.playerGroup = [];
    this.attemptCount = null;
  }

  registerPlayer(player) {
    this.playerGroup.push(player);
  }
}

export default GameManager;
