import Race from './domain/Race.js';

class App {
  async play() {
    const race = new Race();
    await race.prepare();
    race.race();
    race.showWinners();
  }
}

export default App;
