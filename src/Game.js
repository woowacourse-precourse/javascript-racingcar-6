import Car from './Car.js';
import Input from './Input.js';

class Game {
  totalRound = 0;

  currentRound = 0;

  carArray = [];

  winner = [];

  input = new Input();

  setCarArray(nameArray) {
    this.carArray = nameArray.map((n) => new Car(n));
  }

  async start() {
    await this.input.readText();
    this.setCarArray(this.input.nameArray);
  }
}

export default Game;
