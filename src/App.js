import { MissionUtils } from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;
import Cars from "./Cras";
class App {

  running_race(cars, repetitions) {
    for(let i =0 ;i<repetitions;i++) {
      const moves = Random.pickUniqueNumbersInRange(1, 10, cars.len); 
      cars.move_cars(moves);
    }
  }

  async play() {
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)")
    const cars = new Cars(input);
    const repetitions = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    this.running_race(cars, repetitions);
  }
}

export default App;
