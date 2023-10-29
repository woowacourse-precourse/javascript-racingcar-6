import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    // 경주할 자동차 이름 입력
    const cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    // 시도 횟수 입력
    const counts = Number(await Console.readLineAsync('시도할 횟수는 몇 회인가요?'));
    
    // 형식 확인
    if (typeof(cars) !== 'string' || typeof(counts) !== 'number') {
      throw new Error('[ERROR] 잘못된 형식입니다.')
    };
    
    
    // 길이 확인
    const carList = cars.split(',').map(String);
    carList.map(car => {
      if (car.length > 5) {
        throw new Error('[ERROR] 자동차 이름이 5이상입니다.')
      }
    });
    
    // 반복
    let count = 0;
    let carsForward = [];
    carList.map(car => carsForward.push(0));
    // Console.print(carsForward)
    Console.print('');
    Console.print('실행 결과');

    while (count !== counts) {
      count++;
      // Console.print(count)
      // 리스트 순회하며 랜덤 숫자 선택
      carList.map((car, idx) => {
        const random = MissionUtils.Random.pickNumberInRange(0, 9);
        if (random >= 4) {
          // Console.print(car + ' 전진!');
          carsForward[idx]++
          // Console.print(carsForward + ' 전진!');
        };
        Console.print(car + ' : ' + '-'.repeat(carsForward[idx]))
      })
      Console.print('')
    }
    
    // 최댓값
    let mx = 0;
    for (let i = 0; i < carList.length; i++) {
      if (mx < carsForward[i]) {
        mx = carsForward[i]
      };
    }
    const winners = []; // 우승자 배열

    for (let i = 0; i < carsForward.length; i++) {
      const element = carsForward[i];
      // Console.print('여기는 왔니?'+mx);
      if (element === mx) {
        // Console.print(carList[i]+'우승');
        winners.push(carList[i]);
        // Console.print('winners : '+winners)
      }
    }
    Console.print('최종 우승자 : ' + winners);
  }
};

const app = new App();
app.play();

export default App;
