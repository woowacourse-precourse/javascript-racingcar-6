import RacingStart from "../src/Race/RacingStart";
class App {
  RacingStart = new RacingStart();
  async play() {
    await this.RacingStart.start();
  }
}

export default App;
