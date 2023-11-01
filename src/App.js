/* eslint class-methods-use-this: "off" */
import { startGame } from './Domain/RacingGame';

class App {
  async play() {
    await startGame();
    //console.log('게임시작');
  }
}

export default App;
