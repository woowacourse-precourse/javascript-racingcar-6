import { MissionUtils } from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;
import Cars from "./Cras";
class App {

  printCarMoves(cars) {
    let runningResult = "";
    Object.keys(cars.obj).forEach((item) => {
      runningResult += `${item} : `+"-".repeat(cars.obj[item])+"\n";
    });
    Console.print(runningResult);
  }

  getMoveArr(cars) {
    const moves = [];
    for(let i=0;i<cars.len;i++) {
      moves.push(Random.pickNumberInRange(1, 9))
    }
    return moves;
  }

  running_race(cars, repetitions) {
    for(let i =0 ;i<repetitions;i++) {
      cars.move_cars(this.getMoveArr(cars));
      this.printCarMoves(cars);
    }
  }

  nameValidation(carNames) {
    carNames.map((name) => {
      if (name.length > 5) throw new Error("[ERROR]")
    });
  }
  
  async play() {
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carNames = input.split(",");
    this.nameValidation(carNames);
    const cars = new Cars(input);
    const repetitions = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    this.running_race(cars, repetitions);
  }
}

export default App;