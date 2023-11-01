import CarRacing from './domain/CarRacing.js';

class App {
  async play() {
    const carRacing = new CarRacing();
    await carRacing.prepare();
    carRacing.race();
    carRacing.showTotalResults();
    carRacing.showWinners();
  }
}

export default App;
