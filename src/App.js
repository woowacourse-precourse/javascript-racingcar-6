import Computer from './Computer.js';

class App {
  constructor() {
    this.computer = new Computer();
  }

  async play() {
    await this.computer.playGame();
  }
}

export default App;
