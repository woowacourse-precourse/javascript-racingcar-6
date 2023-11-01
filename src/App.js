import CarController from "../src/controllers/carController";

class App {
  async play() {
    await new CarController().play();
  }
}

export default App;
