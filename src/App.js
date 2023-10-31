import CarRacing from "./CarRacing.js";

class App {
  async play() {
    const racing = new CarRacing();
    await racing.startGame();
  }
}

export default App;
