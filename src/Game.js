import Input from './Input.js';

class Game {
  totalRound = 0;

  currentRound = 0;

  carArray = [];

  winner = [];

  input = new Input();

  async start() {
    await this.input.readText();
  }
}

export default Game;
