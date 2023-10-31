import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const nameInputValue = await this.userInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
  }

  async userInput(message) {
    const inputValue = await MissionUtils.Console.readLineAsync(message);
    return inputValue;
  }
}

export default App;
