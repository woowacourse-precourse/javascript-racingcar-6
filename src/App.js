import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { CheckLength } from './CheckLength.js';
import { CheckRandomNum } from './CheckRandomNum.js';
import { FindMax } from './FindMax.js';
import { FindWinners } from './FindWinners.js';

class App {
  async play() {
    const cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const counts = Number(await Console.readLineAsync('시도할 횟수는 몇 회인가요?'));
    
    if (typeof(cars) !== 'string' || typeof(counts) !== 'number') {
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
      carList.map((car, idx) => {
        forwardCounts = CheckRandomNum(forwardCounts, idx)
        Console.print(car + ' : ' + '-'.repeat(forwardCounts[idx]));
      })
      Console.print('');
    }
    
    let maxForward = 0;
    for (let i = 0; i < carList.length; i++) {
      maxForward = FindMax(maxForward, forwardCounts, i);
    };

    const winners = FindWinners(forwardCounts, maxForward, carList);
    Console.print('최종 우승자 : ' + winners);
  }
};

export default App;
