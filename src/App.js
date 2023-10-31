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
    const nameArr = nameString.split(CHAR.SEPARATOR);

    nameArr.forEach((name) => {
      const newCar = new Car(name);
      this.cars.push(newCar);
    });
  }

  startRace(attemp) {
    print();
    print(PROMPT.RACE_START);

    while (this.winners.length === 0) {
      this.cars.forEach((car) => car.move());

      this.printMoveResult();

      this.winners = this.cars.filter((car) => car.getPosition() === Number(attemp));
    }
  }

  printMoveResult() {
    this.cars.forEach((car) => {
      print(`${car.name} : ${'-'.repeat(car.position)}`);
    });

    print();
  }

  printWinners() {
    const winnerNames = this.winners.map((car) => car.getName());

    print(`${PROMPT.FINAL_WINNER} : ${winnerNames.join(`${CHAR.SEPARATOR} `)}`);
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
