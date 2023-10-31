import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car";


class App {
  async play() {
    let playersName = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const car = new Car(playersName);
    let playTime = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    if(isNaN(playTime)){
      throw new Error('[ERROR] 입력 값이 숫자가 아닙니다');
    }
    car.playRacing(playTime);
    car.printResult();
    return
  }
}

export default App;
