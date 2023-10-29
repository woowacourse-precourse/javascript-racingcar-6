import { readCarName, readRaceCount } from './RaceInput.js';

class App {
  async play() {
    await readCarName();
    await readRaceCount();
  }
};

export default App;
