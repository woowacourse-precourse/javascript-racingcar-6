import Computer from "./module/Computer.js";

class App {
  async play() {
    const computer = new Computer();

    await computer.start();
    computer.finish();
  }
}

export default App;
