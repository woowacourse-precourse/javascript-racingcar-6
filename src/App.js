import {Console} from '@woowacourse/mission-utils'
import { Car } from './models/CarModel.js';
import { MESSAGES } from './constants/messages.js';
import { ERRORS } from './constants/errors.js';
class App {
  constructor(){
    this.carList = [];
  }
  async play() {
    this.getCarNames();
  }
  async getCarNames(){
    // 1-1. 자동차 이름을 입력받기
    const carNamesInput = await Console.readLineAsync(MESSAGES.GET_CAR_NAMES);
    const carNames = carNamesInput.split(',');
    
    // 유효성 검사
    carNames.forEach ((carName) => {
      if(!this.isValidCarName(carName))
        throw new Error(ERRORS.INVALID_INPUT);
      else
        this.carList.push(new Car(carName));
    })
  }
  isValidCarName(carName){
    // 이름에 없는 경우 ex) ,,tom,elice
    if (carName ==='') return false;
    
    // 이름이 6글자 이상인 경우
    if (carName.length >= 6) return false;
    
    // 이름에 공백이 있는 경우
    if (carName.includes(' ')) return false;
    return true;
  }
}

export default App;
