import carNameInput from "./MVC/view/input/carNameInput.js";

class App {
  async play() {
    const carnameinput = new carNameInput();
    await carnameinput.carName();
    return;
  }
}

export default App;
