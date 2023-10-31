import Referee from './Referee';
const referee = new Referee();

class App {
  async play() {
    await referee.raceStart();
  }
}

export default App;
