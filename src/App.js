import CarNameInput from "./MVC/view/input/carNameInput.js";

class App {
  async play() {
    const carnameinput = new CarNameInput();
    await carnameinput.carName();
    return;
  }
}

export default App;
