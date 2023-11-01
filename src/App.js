import { MissionUtils } from "@woowacourse/mission-utils";
import Car from './Car.js';

class App {

  printEachResult(carList) {
    carList.forEach((car) => {
      // console.log(car.name, car.moveCount);
      MissionUtils.Console.print(`${car.name} : ${car.printMove()}`);
    })
  }

  async play() {
    // 자동차 이름 입력
    const carStr = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carArr = carStr.split(',');
    
    if (carArr.length === 1) throw new Error("[ERROR] 자동차는 2개 이상이어야 합니다.");
    carArr.map((v, idx) => {
      if (v.length > 5) throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
      if (!/[\w]+/.test(v)) throw new Error("[ERROR] 자동차 이름은 문자여야 합니다.");
      if (carArr.indexOf(v) !== idx) throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    })

    // 시도 횟수 입력
    let tryCount = parseInt(await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'));
    if (!/^\d+$/.test(tryCount)) throw new Error("[ERROR] 시도 횟수는 숫자만 입력해야 합니다.");
    if (tryCount === 0) throw new Error("[ERROR] 시도 횟수는 0 이상이어야 합니다.");

    // 자동차 수만큼 자동차 생성
    const carList = [];
    for (const car of carArr) {
      carList.push(new Car(car));
    }

    while(tryCount--) {
      // 각 자동차 전진 여부 결정
      carList.map((car) => car.playGame());
      console.log('----------------');
      MissionUtils.Console.print('실행결과');
      this.printEachResult(carList);
    }
  }
}

export default App;
