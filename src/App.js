import Car from './car/Car';
import print from './utils/print';
import getUserInput from './utils/getUserInput';
import isValidCarNameString from './modules/isValidCarNameString';
import isValidAttempNumber from './modules/isValidAttempNumber';

const prompt = {
  CAR_NAMES: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
`,
  ATTEMP_NUMBER: `시도할 횟수는 몇 회인가요?
`,
};

class App {
  constructor() {
    this.cars = [];
    this.winners = [];
  }

  createCar(nameString) {
    const nameArr = nameString.split(',');

    nameArr.forEach((name) => {
      const newCar = new Car(name);
      this.cars.push(newCar);
    });
  }

  startRace(attemp) {
    print();
    print('실행 결과');

    while (this.winners.length === 0) {
      this.cars.forEach((car) => {
        car.move();
      });

      this.printMoveResult();

      this.winners = this.cars.filter((car) => {
        return car.getPosition() === Number(attemp);
      });
    }
  }

  printMoveResult() {
    this.cars.forEach((car) => {
      print(`${car.name} : ${'-'.repeat(car.position)}`);
    });

    print();
  }

  printWinners() {
    const winnerNames = this.winners.map((car) => {
      return car.getName();
    });

    print(`최종 우승자 : ${winnerNames.join(', ')}`);
  }

  async play() {
    const carNames = await getUserInput(prompt.CAR_NAMES, isValidCarNameString);
    const apttempNumber = await getUserInput(prompt.ATTEMP_NUMBER, isValidAttempNumber);

    this.createCar(carNames);
    this.startRace(apttempNumber);
    this.printWinners();
  }
}

export default App;
