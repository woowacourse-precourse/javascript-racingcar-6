import inputCarName from './data/inputCarName.js';
import inputCount from './data/inputCount.js';

class App {
  async play() {
    const carArr = await inputCarName();
    const count = await inputCount();
  }
}

const app = new App();
app.play();

export default App;
