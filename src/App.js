import Race from './domain/Race.js';

class App {
  async play() {
    const race = new Race();
    await race.prepare();
  }
}

export default App;
