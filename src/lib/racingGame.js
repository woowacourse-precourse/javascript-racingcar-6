export default class RacingGame {
  cars = [];
  moveCount = 0;

  constructor() {}
  readCarNames() {}
  readMoveCount() {}
  move() {}
  printRacingStatus() {}
  printWinner() {}

  play() {
    this.readCarNames();
    this.readMoveCount();
    for (let i = 0; i < this.moveCount; i++) {
      this.move();
      this.printRacingStatus();
    }
    this.printWinner();
    console.log('The racing game is completed');
  }
}
