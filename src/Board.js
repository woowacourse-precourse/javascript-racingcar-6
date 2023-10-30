import Car from './Car.js'

class Board {

  /** @type {Array<Car>} */
  #cars = [];

  setCars() {
    const carNames = this.#inputCarNames();
    carNames.forEach((name) => {
      this.#cars.push(new Car(name));
    });

    this.#cars.forEach((car) => {
      console.log(car.name);
    })
  }

  #inputCarNames() {
    // TEST: 임시 이름 배열을 carNames 전달
    const carNames = ['car1', 'car2'];
    return carNames;
  }

  setNumTurns() {

  }

  getNumTurns() {

    return 2;
  }

  executeTurn() {

  }

  printMiddleResult() {

  }

  pickOutWinner() {

  }

  printFinalResult() {

  }
}

export default Board;
