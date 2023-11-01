import {Console} from '@woowacourse/mission-utils'
import { Car } from './models/CarModel.js';
import { MESSAGES } from './constants/Messages.js';
import { ERRORS } from './constants/Errors.js';
import { InputValidator } from './validation/InputValidator.js';
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
      if(!InputValidator.isValidCarName(carName))
        throw new Error(ERRORS.INVALID_INPUT);
      else
        this.carList.push(new Car(carName));
    })
  }
  async getPlayCount(){
    // 1-2. 몇 번 이동을 진행할지 입력받기
    const playCountInput = await Console.readLineAsync(MESSAGES.GET_PLAY_COUNT);
    if(!InputValidator.isValidPlayCountInput(playCountInput)){
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
}

export default App;
