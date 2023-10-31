import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carNamesInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const carNames = carNamesInput.split(',');
    this.checkCarNames(carNames);
    
    const tryCountInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    const tryCount = parseInt(tryCountInput);
  }

  checkCarNames = (carNames) => {
    for (const carName of carNames){
      if(carName.length > 5){ throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.')}
    }
  }
}

export default App;
