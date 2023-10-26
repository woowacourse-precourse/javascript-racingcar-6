import InputController from "./Controller/InputController.js";

class App {
  constructor() {
    this.InputController = new InputController();
  }

  async play() {
    await this.InputController.init();
  }
}

export default App;
