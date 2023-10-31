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
    await this.gameStart();
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
  async gameStart() {
    while(this.gameCount > 0){
      // 3. 자동차 이동
      for (const car of this.carList) {
        await car.move();
      }
      
      // 4. 횟수 별 결과 출력
      for (const car of this.carList) {
        Console.print(`${car.getName()} : ${'-'.repeat(car.getMovingLength())}`);
      }
      Console.print('');
      this.gameCount--;
    }
    
    this.printWinner();
  }
  async printWinner(){
    const winnerLength = await this.getWinnerLength();
    const winner = await this.getWinner(winnerLength);
    
    Console.print(`${MESSAGES.WINNER} ${winner.join(', ')}`)
  }
  getWinnerLength(){
    const maxMovingLength = this.carList.reduce((max, car) => {
      return car.getMovingLength() > max ? car.getMovingLength() : max;
    }, -Infinity);
    return maxMovingLength;
  }
  getWinner(winnerLength){
    return this.carList.filter(car => car.getMovingLength() === winnerLength).map(car => car.getName());
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
