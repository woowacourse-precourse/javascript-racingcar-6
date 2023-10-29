import Race from './racingcar/race.js';

class App {
  async play() {
    const race = new Race();
    await race.start();
  }
}

export default App;
