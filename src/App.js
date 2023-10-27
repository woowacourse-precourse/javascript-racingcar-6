import Controller from './Controller/Controller.js';

class App {
  async play() {
    const controller = new Controller();

    controller.start();
  }
}

const app = new App();
app.play();

export default App;
