import { printResult } from "../view/OutputView.js";
import generateRandomMove from "./GenerateRandomMove.js";

class GameLogic {
    #carsMap = new Map();
    #isAttemptsValid = false;
    

  async gameStart(carNames, attempts) {
    await printResult();
    this.#initializeCarsMap(carNames);
    while(!this.#isAttemptsValid){
        this.#playGame(carNames, attempts);
    }
    console.log(this.#carsMap);
  }

  #initializeCarsMap(carNames) {
    carNames.forEach((carName) => {
        this.#carsMap.set(carName, 0);
    });
  }

    #playGame(carNames, attempts) {
      carNames.forEach((carName) => {
        const shouldMove = generateRandomMove();
        if (shouldMove) {
          this.#updateCarPosition(carName, attempts);
        }
      });
    }

    #updateCarPosition(carName, attempts) {
      this.#carsMap.set(carName, this.#carsMap.get(carName) + 1);
      if(this.#carsMap.get(carName) === attempts){
        this.#isAttemptsValid = true;
      }
    }
}

export default GameLogic;
