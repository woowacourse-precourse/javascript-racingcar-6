export default class Model {
  constructor() {
    this.players = new Array();
    this.tryNumber = 0;
    this.winner = [];
  }
  setPlayerObject(player) {
    this.players = player;
  }
  setTryNumber(number) {
    this.tryNumber = number;
  }
  getPlayerObject() {
    return this.players;
  }
  getTryNumber() {
    return this.tryNumber;
  }
  initPlayerObject() {
    let playersArray = new Array();
    for (let i = 0; i < this.players.length; i++) {
      let player = new Object();
      player.name = this.players[i];
      player.score = 0;
      playersArray.push(player);
    }
    this.setPlayerObject(playersArray);
  }
  processSeparatorOfCarName(inputCarNames) {
    this.setPlayerObject(inputCarNames.split(","));
  }
  getWinner() {
    const winner = this.players.filter((player, index, target) => {
      const maxOfScore = Math.max(...target.map((player) => player.score));
      return player.score === maxOfScore;
    });
    return winner;
  }
}
