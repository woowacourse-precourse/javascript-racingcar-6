import {Console} from '@woowacourse/mission-utils'
import { Car } from './models/CarModel.js';
import { MESSAGES } from './constants/messages.js';
import { ERRORS } from './constants/errors.js';
import { isNumber } from './utils/validationUtils.js';
class App {
  constructor(){
    this.carList = [];
    this.gameCount;
  }
  async play() {
    await this.getCarNames();
    await this.getPlayCount();
    
    // 2. 게임 진행
    this.gameStart();
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
  async getPlayCount(){
    // 1-2. 몇 번 이동을 진행할지 입력받기
    const playCountInput = await Console.readLineAsync(MESSAGES.GET_PLAY_COUNT);
    if(!this.isValidPlayCountInput(playCountInput)){
      throw new Error(ERRORS.INVALID_INPUT);
    }
    this.gameCount = playCountInput;
  }
  gameStart(){
    // 3. 자동차 이동
    this.carList.forEach((car) => {
      car.move();
    })
  }
  isValidCarName(carName){
    // 이름에 없는 경우 ex) ,,tom,elice
    if (carName === '') return false;
    
    // 이름이 6글자 이상인 경우
    if (carName.length >= 6) return false;
    
    // 이름에 공백이 있는 경우
    if (carName.includes(' ')) return false;
    return true;
  }
  isValidPlayCountInput(playCount){ 
    // 입력에 공백이 있는 경우
    if (playCount === '') return false;
    // 숫자가 아닌 경우
    if (!isNumber(playCount)) return false;
    
    // 1이상의 수가 아닌 경우
    if (Number(playCount) < 1) return false;
    
    return true;
  }
}

export default App;
