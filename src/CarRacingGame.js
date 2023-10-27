import { Console, Random } from '@woowacourse/mission-utils';
import Car from './Car';

export default class CarRacingGame {
  #carNameArray;

  async gameStart() {
    const carNames = await this.getCarNames().catch(()=>{
      throw new Error('[ERROR]')
    });

    let tryCount = await this.getTryCount().catch(() => {
      throw new Error('[ERROR]')
    })

    this.#carNameArray = this.carNamesToCarNameArray(carNames);
    while(tryCount-- > 0){
      this.tryAdvance();
      this.eachResultPrint();
    }
  }

  carNamesToCarNameArray(carNames = ''){
    return carNames.split(',').map((carName)=>{
      const trimCarName = carName.trim();
      if(trimCarName.length > 5 || trimCarName.length === 0){
        throw new Error('[ERROR] 자동차 이름이 5문자 초과입니다.');
      }
      return new Car(trimCarName);
    })
  }

  tryAdvance(){
    this.#carNameArray.forEach((car) => {
      if(this.isAdvance()){
        car.plusAdvanceCount();
      }
    });
  }

  isAdvance(){
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  eachResultPrint(){
    this.#carNameArray.forEach((car) => {
      const advances = '-'.repeat(car.getAdvanceCount());
      Console.print(`${car.getName()} : ${advances}`);
    })
    Console.print('');
  }

  getCarNameArray(){
    return this.#carNameArray;
  }

  async getCarNames() {
    try {
      const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
      return carNames;
    } catch (error) {
      throw new Error('[ERROR]');
    }
  }

  async getTryCount() {
    try {
      const carNames = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
      return carNames;
    } catch (error) {
      throw new Error('[ERROR]');
    }
  }
}
