import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carsName = await this.receiveUserInput('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const cars = this.seperateNames(carsName);
    const gamesNum = await this.receiveUserInput('시도할 횟수는 몇 회인가요?\n');
    const num = this.isValidGameNum(gamesNum);
  }

  async receiveUserInput(guideMsg) {
    const userInput = await Console.readLineAsync(guideMsg);
    return userInput;
  }

  seperateNames(names) {
    // 이름에 대한 예외 처리 필요
    const seperated = names.split(',');

    seperated.forEach(el => {
      this.isValidName(el);
    });

    seperated.forEach(el => {
      this.isValidLen(el);
    });

    return seperated;
  }

  isValidName(name) {
    const regEx = /^[a-z]*$/;
    if(!name.match(regEx)) throw new Error('[ERROR] 자동차 이름은 영문 소문자만 가능합니다.');
  }

  isValidLen(name) {
    if(name.length > 5) throw new Error('[ERROR] 자동차 이름의 길이는 5 이하입니다.');
  }

  isValidGameNum(num) {
    const regEx = /[1-9]\d*/;
    if(!num.match(regEx)) throw new Error('[ERROR] 시도 횟수는 올바른 숫자값으로 입력해 주세요.');
    return Number(num);
  }
}

export default App;