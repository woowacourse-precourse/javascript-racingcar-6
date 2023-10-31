import getUserInput from './getUserInput.js';
import playRacingGame from './playRacingGame.js';

class App {
  async play() {
    const { carNames, count } = await getUserInput();

    playRacingGame({ carNames, count });
  }
}

export default App;
