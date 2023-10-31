import InputHandler from "./InputHandler.js";
import Race from "./Race.js";
import Display from "./Display.js";

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.race = new Race();
    this.display = new Display();
  }

  async play() {
    const names = await this.inputHandler.getInputCarNames();
    const rounds = await this.inputHandler.getInputRounds();
    this.race.race(names, rounds, this.display);
  }
}


export default App;
