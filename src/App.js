import getUserInput from './getUserInput';
import playRacingGame from './playRacingGame';

class App {
  async play() {
    const { carNames, count } = await getUserInput();

    playRacingGame(carNames, count);
  }
}

export default App;
