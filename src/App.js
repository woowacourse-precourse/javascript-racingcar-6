import { Console } from '@woowacourse/mission-utils';

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
    while (count !== counts) {
      count++;
      Console.print(count)
    }
    Console.print("종료")

  }
};

const app = new App();
app.play();

export default App;
