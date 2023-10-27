import Racing from "./controller/Racing.js";

class App {
  async play() {
    const racing = new Racing();
    await racing.startRace();
  }
}

export default App;
