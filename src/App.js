import racingCarGame from './game';

class App {
  async play() {
    const { carNameArray, moveCount } =
      await racingCarGame.promptToRacingObject();
  }
}

export default App;
