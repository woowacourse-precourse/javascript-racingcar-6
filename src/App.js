import { Console , Random } from '@woowacourse/mission-utils';
import { USER_INPUT , MESSAGE, ERROR_MESSAGE} from './constants.js';

class App {
  constructor(){
    this.carName = [];
    this.carMoveCount = [];
    this.round = 0;
  }

  async play() {
    await this.getCarName();
    await this.getRound();

    this.showRaceProcess();
    this.showRaceResult();
  }

  async getCarName() {
    const input = await Console.readLineAsync(USER_INPUT.CAR_NAME);
    const carNames = input.split(',');
    
    carNames.forEach((carName) => {
      this.checkCarNameVaildity(carName);
      this.carName.push(carName);
    })
  }

  checkCarNameVaildity(carName) {
    if (carName.length > 5) throw new Error(ERROR_MESSAGE.INPUT_CAR_NAME_ERROR);
    if (carName === '') throw new Error(ERROR_MESSAGE.INPUT_CAR_NAME_EMPTY_ERROR);
    if (this.carName.includes(carName)) throw new Error(ERROR_MESSAGE.INPUT_CAR_NAME_DUPLICATE_ERROR);
  }

  async getRound() {
    const input = await Console.readLineAsync(USER_INPUT.ROUND);
    const round = Number(input);

    this.checkRoundVaildity(round);
    this.round = round;
  }

  checkRoundVaildity(round) {
    if (isNaN(round)) throw new Error(ERROR_MESSAGE.INPUT_CAR_ROUND_ERROR);
    if (round === 0) throw new Error(ERROR_MESSAGE.INPUT_CAR_ROUND_ZERO_ERROR);
  }

  showRaceProcess() {
    Console.print(MESSAGE.RESULT);

    this.carMoveCount = new Array(this.carName.length).fill(0);
    
    for (let i = 0; i < this.round; i++) {
      this.updateCarMoveCount();
      this.showCarProcess();
      Console.print('');
    }
  }

  updateCarMoveCount() {
    this.carMoveCount = [...this.carMoveCount].map((count) => {
      if (this.getRandomNumber() >= 4) count++

      return count
    })
  }

  showCarProcess() {
    this.carName.forEach((carName,i) => {
      Console.print(`${carName} : ${'-'.repeat(this.carMoveCount[i])}`)
    })
  }

  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  showRaceResult() {
    const result = this.findWinners();
    Console.print(`${MESSAGE.WINNER + result}`);
  }

  findWinners() {
    const maxMove = this.findMaxCount();

    return [...this.carName]
    .filter((_,i) => ( this.carMoveCount[i] === maxMove ))
    .join(', ');
  }

  findMaxCount() {
    return Math.max(...this.carMoveCount)
  }
}

export default App;
