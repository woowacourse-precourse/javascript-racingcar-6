import Computer from './Computer';

class App {
  async play() {
    this.computer = Computer.createComputer();
    await this.computer.init();
    await this.computer.playGame();
  }
}

export default App;
