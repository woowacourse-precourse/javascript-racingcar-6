import { Console } from '@woowacourse/mission-utils';

class App {    
  async play() {
    const carNamesInput = await Console.readLineAsync('경주할 자동차이름을입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');   
  }
}

export default App;
