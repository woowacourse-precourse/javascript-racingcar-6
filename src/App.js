import game from "./controller/game";

class App {
  async play() {
    await game();
  }
}

export default App;
