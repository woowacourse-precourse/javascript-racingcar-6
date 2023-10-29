import CarRacing from "./controller/CarRacing.js";

class App {
  async play() {
    const carRacing = new CarRacing();
    await carRacing.racing();
  }
}

export default App;
