import Input from './Input';
import Output from './Output';
import Validation from './Validation';
import Car from './Car';

class App {
  carNames;

  cars = [];

  GameCount;

  makeCars(carNamesString) {
    const carNamesArr = carNamesString.split(',');
    carNamesArr.forEach((carName) => {
      const car = new Car(carName);
      this.cars.push(car);
    });
    return this.cars;
  }

  setCarsMovements() {
    this.cars.forEach((car) => {
      car.setMovement(this.GameCount);
    });
  }

  findLongestMovementLength() {
    const movementLengthArr = [];
    this.cars.forEach((car) => {
      const movementLength = car.getMovementLength();
      movementLengthArr.push(movementLength);
    });
    return Math.max(...movementLengthArr);
  }

  findFinalWinner(longestMovementLength) {
    const winners = [];
    this.cars.forEach((car) => {
      if (car.getMovementLength() === longestMovementLength) {
        winners.push(car.name);
      }
    });
    return winners.join(', ');
  }

  async play() {
    const inputCarNames = await Input.getCarNamesFromUser();
    Validation.validateCarName(inputCarNames);
    this.carNames = inputCarNames;

    const inputGameCount = await Input.getGameCountFromUser();
    Validation.validateGameCountNaturalNumber(inputGameCount);
    this.GameCount = inputGameCount;

    this.makeCars(this.carNames);

    this.setCarsMovements();

    Output.printGameResult(this.cars, this.GameCount);

    const longestMovementLength = this.findLongestMovementLength();
    const finalWinners = this.findFinalWinner(longestMovementLength);
    Output.printFinalWinners(finalWinners);
  }
}

export default App;
