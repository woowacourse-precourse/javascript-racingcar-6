import CarNameInput from "./view/input/CarNameInput.js";

class App {
  constructor() {
    this.carnameinput = new CarNameInput();
  }
  async play() {
    await this.carnameinput.carName();
    return;
  }
}

export default App;
