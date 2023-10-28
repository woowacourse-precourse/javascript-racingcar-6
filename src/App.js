import { Random, Console } from '@woowacourse/mission-utils';

class App {
  checkRacingCarNameValidation = (el) => {
    return el.length < 6 ? true : false;
  };

  getRacingCarNameInput = async () => {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );

    const cars = input.split(',').map((el) => {
      if (!this.checkRacingCarNameValidation(el)) {
        throw new Error('[ERROR] 입력이 5자 이하가 아닙니다.');
      }
    });

    return cars;
  };

  async play() {
    try {
      await this.getRacingCarNameInput();
    } catch (err) {
      Console.print(err.message);
      throw err;
    }
  }
}

export default App;
