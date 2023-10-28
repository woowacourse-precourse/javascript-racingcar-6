import racingCarGame from './game';

class App {
  async play() {
  constructor() {
    this.moveCount = 0;
    this.racingStatus = [];
  }

  async ready() {
    const { carNameArray, moveCount } =
      await racingCarGame.promptToRacingObject();
    this.moveCount = moveCount;
    this.racingStatus = racingCarGame.makeCarsWithForwardCount(carNameArray);
  }

  async play() {
    await this.ready();
  }
}

export default App;
