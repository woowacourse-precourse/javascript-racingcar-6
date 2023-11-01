import { MissionUtils } from "@woowacourse/mission-utils";
import Car from './Car.js';

class App {

  printEachResult(carList) {
    carList.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${car.printMove()}`);
    })
    MissionUtils.Console.print('');
  }

  checkCarValid(carArr) {
    if (carArr.length === 1) throw new Error("[ERROR] 자동차는 2개 이상이어야 합니다.");
    carArr.map((v, idx) => {
      if (v.length > 5) throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
      if (/^\d+$/.test(v)) throw new Error("[ERROR] 자동차 이름은 문자여야 합니다. 공백이 있으면 안됩니다.");
      if (!/^\w+$/.test(v)) throw new Error("[ERROR] 자동차 이름은 문자여야 합니다.");
      if (carArr.indexOf(v) !== idx) throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    })
  }

  checkTryCountValid(tryCount) {
    if (!/^\d+$/.test(tryCount)) throw new Error("[ERROR] 시도 횟수는 숫자만 입력해야 합니다.");
    if (tryCount === 0) throw new Error("[ERROR] 시도 횟수는 0 이상이어야 합니다.");
  }

  async play() {
    // 자동차 이름 입력
    const carStr = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carArr = carStr.split(',');
    
    // 자동차 입력 예외처리
    this.checkCarValid(carArr);

    // 시도 횟수 입력
    let tryCount = parseInt(await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'));
    this.checkTryCountValid(tryCount);

    // 자동차 수만큼 자동차 생성
    const carList = [];
    for (const car of carArr) {
      carList.push(new Car(car));
    }

    MissionUtils.Console.print('\n실행결과');
    while(tryCount--) {
      // 각 자동차 전진 여부 결정
      carList.map((car) => car.playGame());
      this.printEachResult(carList);
    }

    // 최종 우승자 출력
    const winners = [];
    carList.forEach((car) => {
      if (Car.getMaxMoveCount() === car.moveCount) winners.push(car.name);
    })
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`)
  }
}

export default App;
