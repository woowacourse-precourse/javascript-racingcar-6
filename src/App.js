import { MissionUtils } from "@woowacourse/mission-utils";
import Car from './Car.js';

class App {
  async play() {
    // 자동차 이름 입력
    const carStr = await MissionUtils.Console.readLineAsync('닉네임을 입력해주세요.');
    const carArr = carStr.split(',');
    
    if (carArr.length === 1) throw new Error("[ERROR] 자동차는 2개 이상이어야 합니다.");
    carArr.map((v, idx) => {
      if (v.length > 5) throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
      if (!/[\w]+/.test(v)) throw new Error("[ERROR] 자동차 이름은 문자여야 합니다.");
      if (carArr.indexOf(v) !== idx) throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    })

    // 시도 횟수 입력
    const tryCount = parseInt(await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?'));
    if (!/^\d+$/.test(tryCount)) throw new Error("[ERROR] 시도 횟수는 숫자만 입력해야 합니다.");
    if (tryCount === 0) throw new Error("[ERROR] 시도 횟수는 0 이상이어야 합니다.");

    // 자동차 수만큼 자동차 생성
    const carList = [];
    for (const car of carArr) {
      carList.push(new Car(car));
    }
  }
}

export default App;
