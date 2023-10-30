import { gameStart } from './gamePlayAndStart.js';

class App {
  async play() {
    await gameStart();
  }
}

export default App;
