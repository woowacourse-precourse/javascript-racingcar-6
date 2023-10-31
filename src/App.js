import Controller from './controller/controller';

class App {
  async play() {
    const carGame = new Controller();
    await carGame.start();
  }
}

export default App;
