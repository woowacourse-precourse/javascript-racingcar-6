import { Console, Random } from "@woowacourse/mission-utils";

class RacingGame {
  constructor() {
    this.carNames = [];
    this.numberOfRounds = 0;
    this.raceProgress = [];
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      "Enter the car names for the race (separated by commas):"
    );
    const carNames = input.split(",");
    this.validateCarNames(carNames);
  }

  validateCarNames(names) {
    names.forEach((name) => {
      if (name.length > 5) {
        throw new Error(
          "[ERROR] Car names can have a maximum of 5 characters."
        );
      }
    });
    this.carNames = names;
  }

  async getNumberOfRounds() {
    const input = await Console.readLineAsync(
      "How many rounds would you like to race?"
    );
    this.validateNumberOfRounds(input);
  }

  validateNumberOfRounds(rounds) {
    const numberOfRounds = parseInt(rounds, 10);
    if (isNaN(numberOfRounds) || numberOfRounds < 1) {
      throw new Error(
        "[ERROR] Please enter a valid number greater than or equal to 1."
      );
    }
    this.numberOfRounds = numberOfRounds;
  }

  async race() {
    Console.print("Race Results");

    const initialProgress = new Array(this.carNames.length).fill("");
    this.raceProgress = initialProgress;

    for (let round = 0; round < this.numberOfRounds; round++) {
      this.simulateRound();
    }
  }

  simulateRound() {
    for (let carIndex = 0; carIndex < this.carNames.length; carIndex++) {
      const random = Random.pickNumberInRange(0, 9);
      if (random >= 4) {
        this.raceProgress[carIndex] += "-";
      }
    }
    this.displayRaceProgress();
  }

  displayRaceProgress() {
    this.carNames.forEach((name, carIndex) => {
      Console.print(name + " : " + this.raceProgress[carIndex]);
    });
    Console.print("");
  }

  async determineWinner() {
    const progressLengths = this.raceProgress.map(
      (progress) => progress.length
    );
    const maxProgress = Math.max(...progressLengths);
    const winners = this.carNames.filter(
      (_, index) => progressLengths[index] === maxProgress
    );

    Console.print("Final Winner(s): " + winners);
  }

  async play() {
    await this.getCarNames();
    await this.getNumberOfRounds();
    await this.race();
    await this.determineWinner();
  }
}

export default RacingGame;

const game = new RacingGame();
game.play();
