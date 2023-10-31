/* eslint class-methods-use-this: "off" */
import playGame from './Domain/RacingGame';

class App {
  async play() {
    await playGame();
    console.log('게임시작');
  }
}

export default App;
