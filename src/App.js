import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    try{
      Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
      const carNamesInput = await Console.readLineAsync();
      const carNames = carNamesInput.split(',');
    }
    catch (error) {
      Console.print(error.message);
    }

  }
}

export default App;
