import {Console, Random} from '@woowacourse/mission-utils';
class App {
  async play() {
    const userInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.');

    const CAR_NAME_ARRAY = userInput.split(',');
    CAR_NAME.forEach(car => {
      if(car.length > 5)  throw new Error(`[ERROR] 자동차 이름(${car})이 5글자를 초과합니다.`)
    });
    const CAR = CAR_NAME.map(name=>({name, distance: 0}));

  }
}

export default App;
