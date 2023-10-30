import Controller from "./Controller";
class App {
  async play() {
    const controller = new Controller();
    await controller.run();
  }
}

export default App;
