import { Console } from '@woowacourse/mission-utils';
import { CheckLength } from './CheckLength.js';
import { CheckRandomNum } from './CheckRandomNum.js';
import { FindMax } from './FindMax.js';
import { FindWinners } from './FindWinners.js';

class App {
  async play() {
    const cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    let counts = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    
    if (counts >= 0) {
      counts = Number(counts)
    }
    if (typeof(cars) !== 'string' || typeof(counts) !== 'number' || cars === '') {
      throw new Error('[ERROR] 잘못된 형식입니다.')
    };
    
    const carList = cars.replace(/ /g, '').split(',').map(String); // 공백 제거 및 분리
    carList.map(car => {
      CheckLength(car)
    });
    
    let count = 0;
    let forwardCounts = [];
    carList.map(car => forwardCounts.push(0));

    Console.print('');
    Console.print('실행 결과');

    while (count !== counts) {
      count++;
      forwardCounts = CheckRandomNum(carList, forwardCounts);
      Console.print('');
    }
    
    const maxForward = FindMax(carList, forwardCounts);
    const winners = FindWinners(forwardCounts, maxForward, carList);
    Console.print('최종 우승자 : ' + winners);
  }
};

export default App;
