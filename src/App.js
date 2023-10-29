import { readCarName } from './RaceInput.js';

class App {
  async play() {
    await readCarName();
  }
};

export default App;
