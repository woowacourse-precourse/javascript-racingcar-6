import {Console, Random} from '@woowacourse/mission-utils';
class App {
  async play() {

    let userInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');

    const CAR_NAME_ARRAY = userInput.split(',');
    CAR_NAME_ARRAY.forEach(car => {
      if(car.length > 5)  throw new Error(`[ERROR] 자동차 이름(${car})이 5글자를 초과합니다.`)
    });
    const CAR = CAR_NAME_ARRAY.map(name=>({name, distance: 0}));

    userInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');

    const COUNT = Number(userInput);
    if(isNaN(COUNT) || COUNT > 9 || COUNT < 0)  throw new Error('[ERROR] 잘못된 횟수를 입력했습니다. 0부터 9까지의 정수를 입력해 주세요.')

    Console.print('실행 결과');

    carRace(CAR, COUNT);


  }


}

export default App;

export const carRace = (CAR, COUNT) => {
  console.log(CAR);
  console.log(COUNT);
}