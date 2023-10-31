import carNameInput from "./MVC/view/Input/carNameInput.js";

class App {
  async play() {
    const carnameinput = new carNameInput();
    await carnameinput.carName();
  }
}

export default App;
