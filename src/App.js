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

  
  
}
console.log('test');

const app = new App();
app.Usercar_input();

export default App;
