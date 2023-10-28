import racingCarGame from './game';

class App {
  async play() {
    const { carNameArray, moveCount } =
      await racingCarGame.promptToRacingObject();
    const racingStatus = racingCarGame.makeCarsWithForwardCount(carNameArray);
  }
}

export default App;
