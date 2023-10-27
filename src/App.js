import CarRacing from "./CarRacing.js";

class App {
  async play() {
    const racing = new CarRacing();
    racing.startGame();
  }
}

export default App;
