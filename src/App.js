import { getUserInput } from './components/getUserInput.js';
import { startRacing } from './components/startRacing.js';

class App {
  async play() {
    const userInput = await getUserInput();
    await startRacing(userInput.carNameDict, userInput.trialCount);
  }
}

export default App;
