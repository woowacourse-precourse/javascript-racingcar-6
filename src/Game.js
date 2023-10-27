import Car from './Car.js';
import Input from './Input.js';
import MESSAGE from './Message.js';
import Output from './Output.js';

class Game {
  totalRound = 0;

  currentRound = 0;

  carArray = [];

  winner = [];

  input = new Input();

  output = new Output();

  setCarArray(nameArray) {
    this.carArray = nameArray.map((n) => new Car(n));
  }

  async setTotalRound() {
    this.output.printMessage(MESSAGE.inputRound);
    await this.input.readText(true);
    this.totalRound = this.input.round;
  }

  async start() {
    await this.input.readText(false);
    this.setCarArray(this.input.nameArray);
    await this.setTotalRound();
  }
}

export default Game;
