import CarNameInput from "./view/input/CarNameInput.js";

class App {
  async play() {
    const carnameinput = new CarNameInput();
    await carnameinput.carName();
    return;
  }
}

export default App;
