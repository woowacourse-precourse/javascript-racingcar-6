import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const nameInputValue = await this.userInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    this.nameValidation(nameInputValue);
  }

  async userInput(message) {
    const inputValue = await MissionUtils.Console.readLineAsync(message);
    return inputValue;
  }

  nameValidation(inputValue) {
    if (inputValue === '') throw new Error('[ERROR]');

    if (!inputValue.includes(',') && inputValue.length > 5)
      throw new Error('[ERROR]');

    if (inputValue.includes(',')) {
      const nameArr = inputValue.split(',');
      const uniqueNameSet = new Set(nameArr);
      if (nameArr.length !== uniqueNameSet.size) throw new Error('[ERROR]');

      nameArr.forEach((element) => {
        if (element.length < 1 || element.length > 5)
          throw new Error('[ERROR]');
      });
    }
  }
}

export default App;
