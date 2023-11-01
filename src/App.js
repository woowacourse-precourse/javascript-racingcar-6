import Race from "./Race";

class App {
  async play() {
    const race = new Race();
    await race.ready();
  }
}

export default App;
