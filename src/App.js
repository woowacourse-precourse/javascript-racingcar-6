import { inputCarNames, inputAttemptNumber } from './utils/inputUser';
import race from './race';

class App {
  // eslint-disable-next-line class-methods-use-this
  async play() {
    const carNames = await inputCarNames();
    const attemptNumber = await inputAttemptNumber();

    race(carNames, attemptNumber);
  }
}

export default App;
