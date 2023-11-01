import Race from "./Race";

class App {
  async play() {
    const race = new Race();
    await race.ready();
    race.start();
    race.showResult();
  }
}

export default App;
