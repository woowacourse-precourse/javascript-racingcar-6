import controller from "./controller/controller.js";
class App {
  async play() {
    await controller();
  }
}

export default App;
