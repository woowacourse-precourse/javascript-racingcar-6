import { getUserInput } from './components/getUserInput.js';

class App {
  async play() {
    const userInput = await getUserInput();
    console.log(userInput.carNameDict);
    console.log(userInput.trialCount);
  }
}

const app = new App();
app.play();

export default App;
