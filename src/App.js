import { MESSAGE } from "./constants/message.js";
import { print, readLineAsync } from "./utils/console.js";
import { rangeNumber } from "./utils/random.js";

class App {
  validateCar = (cars) => {
    for (let car of cars) {
      this.validateCarName(car);
    }
  };

  validateCarName = (car) => {
    if (car.length > 5) {
      throw new Error(MESSAGE.ERROR_MAX_NAME_LENGTH);
    }
    if (car.includes(" ")) {
      throw new Error(MESSAGE.ERROR_NAME_GAP);
    }
  };

  carCreate = (cars) => {
    let car = new Map();
    for (let carName of cars) {
      car.set(carName, 0);
    }
    return car;
  };

  winner = (cars, car) => {
    const winner = this.getWinner(cars, car);
    this.printWinner(winner);
  };

  getWinner = (cars, car) => {
    let winnerScore = this.winnerScore(car);
    let winner = [];
    let index = 0;
    for (let carScore of cars) {
      const winnerCar = car.get(carScore);
      if (winnerCar == winnerScore) {
        winner[index] = carScore;
        index++;
      }
    }
    return winner;
  };

  winnerScore = (car) => {
    let winnerScore = -1;
    for (let score of car.values()) {
      if (score > winnerScore) {
        winnerScore = score;
      }
    }
    return winnerScore;
  };

  printWinner = (winner) => {
    let result = "";
    for (let finalWinner of winner) {
      result += finalWinner + ", ";
    }
    result = result.substring(0, result.length - 2);
    print(MESSAGE.FINNAL_WINNER + result);
  };

  racingGame = (cars, car) => {
    for (let carName of cars) {
      const moveNumber = rangeNumber(0, 9);
      let move = 0;
      if (moveNumber >= 4) {
        move = 1;
      }
      car.set(carName, car.get(carName) + move);
    }
  };

  racingResult = (cars, car) => {
    for (let carName of cars) {
      const score = car.get(carName);
      let result = "";
      for (let i = 0; i < score; i++) {
        result += "-";
      }
      print(carName + " : " + result);
    }
    print("");
  };

  async play() {
    const input = await readLineAsync(MESSAGE.CAR_NAME);
    const cars = input.split(MESSAGE.CAR_DIVISION);
    this.validateCar(cars);
    let inputAttempts = await readLineAsync(MESSAGE.NUMBER_OF_ATTEMPTS);
    let car = this.carCreate(cars);
    print(MESSAGE.GAME_RESULT);
    while (inputAttempts > 0) {
      this.racingGame(cars, car);
      this.racingResult(cars, car);
      inputAttempts--;
    }
    this.winner(cars, car);
  }
}

export default App;
