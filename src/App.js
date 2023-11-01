import Car from './car/Car';
import print from './utils/print';
import getUserInput from './utils/getUserInput';
import isValidCarNameString from './modules/isValidCarNameString';
import isValidAttempNumber from './modules/isValidAttempNumber';
import { PROMPT, CHAR } from './constant/constants';

class App {
  constructor() {
    this.cars = [];
    this.winners = [];
  }

  createCar(nameString) {
    const pushNewCar = (name) => {
      const newCar = new Car(name);
      this.cars.push(newCar);
    };

    const nameArr = nameString.split(CHAR.SEPARATOR);
    nameArr.forEach(pushNewCar);
  }

  startRace(attemp) {
    const moveCar = (car) => car.move();
    const getWinner = (car) => car.getPosition() === Number(attemp);

    print();
    print(PROMPT.RACE_START);

    while (this.winners.length === 0) {
      this.cars.forEach(moveCar);
      this.printMoveResult();
      this.winners = this.cars.filter(getWinner);
    }
  }

  printMoveResult() {
    const printMoveResult = (car) => {
      const moveResult = `${car.name} : ${'-'.repeat(car.position)}`;
      print(moveResult);
    };

    this.cars.forEach(printMoveResult);

    print();
  }

  printWinners() {
    const getCarName = (car) => car.getName();
    const winnerNames = this.winners.map(getCarName);
    const winners = `${PROMPT.FINAL_WINNER} : ${winnerNames.join(`${CHAR.SEPARATOR} `)}`;

    print(winners);
  }

  async play() {
    const carNames = await getUserInput(PROMPT.CAR_NAMES, isValidCarNameString);
    const apttempNumber = await getUserInput(PROMPT.ATTEMP_NUMBER, isValidAttempNumber);

    this.createCar(carNames);
    this.startRace(apttempNumber);
    this.printWinners();
  }
}

export default App;
