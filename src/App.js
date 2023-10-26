import inputCarName from './data/inputCarName.js';
import inputCount from './data/inputCount.js';
import advanceCondition from './data/AdvanceCondition.js';

class App {
  async play() {
    const carArr = await inputCarName();
    const count = await inputCount();
    advanceCondition()
  }
}

const app = new App();
app.play();

export default App;
