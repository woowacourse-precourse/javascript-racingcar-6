import inputCarName from './data/inputCarName.js';
import inputCount from './data/inputCount.js';
import playGame from './game/playGame.js';

class App {
  async play() {
    const carArr = await inputCarName();
    const count = await inputCount();
    // advanceCondition();
    playGame(carArr, count);
  }
}

const app = new App();
app.play();

export default App;
