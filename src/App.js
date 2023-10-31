import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const nameInputValue = await this.userInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    this.nameValidation(nameInputValue);
    const carDistanceMap = this.createMap(nameInputValue);
    const roundInputValue = await this.userInput(
      '시도할 횟수는 몇 회인가요?\n',
    );
    this.roundValidation(roundInputValue);
    const roundNumber = Number(roundInputValue);
    this.print('\n실행 결과');
    let roundCount = 1;
    while (roundCount <= roundNumber) {
      const roundResult = this.racing(carDistanceMap);
      this.print(roundResult);
      roundCount += 1;
    }
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

  createMap(inputValue) {
    const carDistanceMap = new Map();
    if (inputValue.includes(',')) {
      const nameArr = inputValue.split(',');
      nameArr.forEach((name) => {
        carDistanceMap.set(name, '');
      });
    }

    if (!inputValue.includes(',')) carDistanceMap.set(inputValue, '');
    return carDistanceMap;
  }

  roundValidation(inputValue) {
    const stringToNumber = Number(inputValue);
    if (isNaN(stringToNumber)) throw new Error('[ERROR]');

    if (stringToNumber < 1) throw new Error('[ERROR]');
  }

  racing(carDistanceMap) {
    let roundResult = '';
    carDistanceMap.forEach((value, key) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4)
        carDistanceMap.set(key, carDistanceMap.get(key) + '-');
      roundResult += `${key} : ${value}\n`;
    });
    return roundResult;
  }

  print(message) {
    MissionUtils.Console.print(message);
  }
}

export default App;
