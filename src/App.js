import {Console, Random} from '@woowacourse/mission-utils';
class App {
  async play() {
    const userInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.');
    console.log(userInput);

    const CAR_NAME = userInput.split(',');
    const CAR = CAR_NAME.map(name=>({name, distance: 0}));
    console.log(CAR);

  }
}

export default App;
