import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car";


class App {
  async play() {
    let player = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const car = new Car(player);
    let playTime = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    car.playgame(playTime)
    car.pritnResult()
  }
}

export default App;
