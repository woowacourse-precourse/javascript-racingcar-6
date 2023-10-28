import AppController from "./controller/AppController";

class App {
  async play() {
    const appController = new AppController();
    await appController.play();
  }
}

export default App;
