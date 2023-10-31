import CarNameInput from "./view/input/CarNameInput.js";

class App {
  constructor() {
    this.carnameinput = new CarNameInput();
  }
  async play() {
    await this.carnameinput.carName();
  }
}

export default App;
