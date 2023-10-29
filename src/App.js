import { Random, Console } from '@woowacourse/mission-utils';

class App {
  checkRacingCarNameValidation = (el) => {
    return el.length < 6 ? true : false;
  };

  getRacingCarNameInput = async () => {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    const carNames = input.split(',').map((el) => {
      if (!this.checkRacingCarNameValidation(el)) {
        throw new Error('[ERROR] 입력이 5자 이하가 아닙니다.');
      }
      return el;
    });

    return carNames;
  };

  checkRacingCountValidation = (el) => {
    return /^[1-9]\d*$/.test(el) ? true : false;
  };

  getRacingCountInput = async () => {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    if (!this.checkRacingCountValidation(input)) {
      throw new Error('[ERROR] 입력이 양수인 숫자가 아닙니다.');
    }

    return input;
  };

  async play() {
    try {
      const carNames = await this.getRacingCarNameInput();
      await this.getRacingCountInput();
    } catch (err) {
      Console.print(err.message);
      throw err;
    }
  }
}

export default App;
