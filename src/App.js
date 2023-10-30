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
  }

  async getCarName() {
    const input = await Console.readLineAsync(USER_INPUT.CAR_NAME);
    
    this.validateCarName(input);
    this.carName = input.split(',');
  }

  validateCarName(input){
    input = input.split(',');

    input.forEach(carName => {
      this.checkCarName(carName);
    })
  }

  checkCarName(carName){
    if(carName.length > 5) throw new Error(ERROR_MESSAGE.INPUT_CAR_NAME_ERROR);
  }

  async getRound(){
    const input = await Console.readLineAsync(USER_INPUT.ROUND);

    this.checkRoundVaildity(input);
    this.round = Number(input);
  }

  checkRoundVaildity(input){
    if(isNaN(Number(input))) throw new Error(ERROR_MESSAGE.INPUT_CAR_MOVE_ERROR);
  }

  showRaceProcess(){
    Console.print(MESSAGE.RESULT);

    this.carMoveCount = new Array(this.round).fill(0);
    
    for (let i = 0; i < this.round; i++) {
      this.updateMoveHistory();
      this.showCarProcess();
      Console.print('');
    }
  }

  showCarProcess(){
    for (let i = 0; i < this.carName.length; i++) {
      Console.print(`${this.carName[i]} : ${'-'.repeat(this.carMoveCount[i])}`)
    }
  }

  updateMoveHistory(){
    for (let i = 0; i < this.carName.length; i++) {
      if (this.getRandomNumber() >= 4) this.carMoveCount[i]++;
    }
  }

  getRandomNumber(){
    return Random.pickNumberInRange(0, 9);
  }
}

export default App;
