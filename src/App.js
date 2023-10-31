import { Console, Random } from '@woowacourse/mission-utils';
import MESSAGE from './Constant.js';
import { checkCarNameDuplicate, checkCarNameLength } from './Validate.js';
import Car from './Car.js';
class App {
  constructor() {
    this.cars = [];
  }
  initCarList(carNameArray) {
    carNameArray.forEach((carName) => {
      this.cars.push(new Car(carName));
    });
  }

  async getCarName() {
    const inputCarName = await Console.readLineAsync(MESSAGE.INPUT_CAR_NAME);
    const carNameArray = inputCarName.split(',');
    if (
      !checkCarNameDuplicate(carNameArray) ||
      !checkCarNameLength(carNameArray)
    )
      throw new Error('[ERROR] 자동차 이름을 다시 확인해주세요');
    this.initCarList(carNameArray);
  }

  async getRaceNumber() {
    const inputRaceNumber = await Console.readLineAsync(
      MESSAGE.INPUT_RACE_NUMBER
    );
    // if (!checkInputRaceNumber)
    //   throw new Error('[ERROR] 올바른 게임 횟수를 입력해주세요');
    return inputRaceNumber;
  }

  makeCarMove() {
    this.cars.forEach((car) => {
      let randomNumber = this.pickRandomNumber();
      if (randomNumber >= 4) {
        car.advance();
      }
    });
  }
  pickRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }
  startRace(raceNumber) {
    for (let i = 0; i < raceNumber; i++) {
      this.makeCarMove();
      this.printResult();
    }
  }

  printResult() {
    this.cars.forEach((car) =>
      Console.print(`${car.name} : ${car.printMove()}`)
    );
    Console.print('');
  }

  checkWinners() {
    const maxAdvance = Math.max(...this.cars.map((car) => car.move));
    const winnersList = this.cars.filter((car) => car.move === maxAdvance);
    this.printWinners(winnersList);
  }
  printWinners(winnersList) {
    const winnersName = winnersList.map((winner) => winner.name);
    Console.print(`${MESSAGE.WINNER} : ${winnersName.join(', ')}`);
  }
  async play() {
    await this.getCarName();
    const raceNumber = await this.getRaceNumber();
    Console.print(MESSAGE.RESULT);
    this.startRace(raceNumber);
    this.checkWinners();
  }
}

export default App;
