import View from "./View.js";

class App {
  async play() {
    const view = new View();
    await view.start();
  }
}

export default App;
