import { Console , Random } from '@woowacourse/mission-utils';
import { USER_INPUT , MESSAGE, ERROR_MESSAGE} from './constants.js';

class App {
  constructor(){
    this.carName = [];
    this.round = 0;
  }

  async play() {
    await this.getCarName();
    await this.getRound();
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
}

export default App;
