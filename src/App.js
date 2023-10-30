import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {

  }

  async Usercar_input() {

    const User_input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) \n');
    
    const Car = User_input.split(',');

    const carMap = new Map();

    for (let i in Car) {
      carMap.set(Car[i], "");
    }

    return carMap;
  }
  
  async NumberOfAttempts() {

    const attempts = await Console.readLineAsync('시도할 횟수는 몇 회인가요? \n');

    return Number(attempts);
  }

  async CheckMove() {
  CheckMove() {

    const num = Random.pickNumberInRange(0, 9);
    
    if (num >= 4) {
      return '-';
    } else {
      return '';
    }

  }

  Update_Distance(racingcar) {
    
    for (let [key, value] of racingcar) {
      racingcar.set(key, value + this.CheckMove());
    }
    
    return racingcar;
  }

  Print_Distance(racingcar) {
    
    for (let [key, value] of racingcar) {
      Console.print(key + " : " + value);
    }

  }

  

}

const app = new App();

export default App;
