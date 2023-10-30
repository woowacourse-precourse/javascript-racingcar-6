import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';

class App {
  async play() {
    try {
      const input = new Input(); // Input 클래스의 인스턴스를 생성
      const carArr = await input.getCarName();
      Console.print(carArr);
      const inputNumber = await input.getRepeatNumber();
      Console.print(inputNumber);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default App;
