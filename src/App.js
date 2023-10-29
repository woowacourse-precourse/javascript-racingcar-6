import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const counts = Number(await Console.readLineAsync('시도할 횟수는 몇 회인가요?'));
    
    if (typeof(cars) !== 'string' || typeof(counts) !== 'number') {
      throw new Error('[ERROR] 잘못된 형식입니다.')
    };
    
    const carList = cars.split(',').map(String);
    carList.map(car => {
      if (car.length > 5) {
        throw new Error('[ERROR] 자동차 이름이 5이상입니다.')
      }
    });
    
    let count = 0;
    let forwardCounts = [];
    carList.map(car => forwardCounts.push(0));

    Console.print('');
    Console.print('실행 결과');

    while (count !== counts) {
      count++;
    
      carList.map((car, idx) => {
        const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNum >= 4) {
          forwardCounts[idx]++
        };
        Console.print(car + ' : ' + '-'.repeat(forwardCounts[idx]));
      })
      Console.print('');
    }
    
    let maxForward = 0;
    for (let i = 0; i < carList.length; i++) {
      if (maxForward < forwardCounts[i]) {
        maxForward = forwardCounts[i];
      };
    };

    const winners = [];
    for (let i = 0; i < forwardCounts.length; i++) {
      if (forwardCounts[i] === maxForward) {
        winners.push(carList[i]);
      };
    };
    
    Console.print('최종 우승자 : ' + winners);
  }
};

const app = new App();
app.play();

export default App;
