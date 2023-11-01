import Race from "./controller/Race.js";

class App {
  async play() {
    const race = new Race();
    await race.init();
  }
}

export default App;
