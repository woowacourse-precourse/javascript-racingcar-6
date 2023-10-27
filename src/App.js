import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {}

  async getCarName() {
    const inputCarName = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );

    return this.getValidateCarName(inputCarName);
  }

  getValidateCarName(inputValue) {
    const racingCars = inputValue.replaceAll(' ', '').split(',');
    const MAX_LENGTH = 5;

    racingCars.map((name) => {
      if (name.length > MAX_LENGTH) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
      }
    });

    return racingCars;
  }

  async getTryCount() {
    const inputTryCount = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?'
    );
  }
}

export default App;
