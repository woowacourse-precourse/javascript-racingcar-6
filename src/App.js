import { Console } from '@woowacourse/mission-utils';

class App {    
  constructor() {
    this.cars = [];
  }

  async play() {
    await this.initializeCars();
  }
  
  async initializeCars() {
    const carNamesInput = await Console.readLineAsync('경주할 자동차이름을입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    this.cars = this.parseCarNamesInput(carNamesInput);
  }

  parseCarNamesInput(input) {
    return input.trim().split(',').map((name) => name.trim());
  }
}

export default App;
