import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    try{
      Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
      const carNamesInput = await Console.readLineAsync();
      const carNames = carNamesInput.split(',');

      Console.print('시도할 횟수는 몇 회인가요?');
      const tryCountInput = await Console.readLineAsync();
      const tryCount = parseInt(tryCountInput);

      if (isNaN(tryCount)) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }

    }
    catch (error) {
      Console.print(error.message);
    }

  }
}

export default App;
