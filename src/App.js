import { MissionUtils } from "@woowacourse/mission-utils";
import Cars from "./Cars";
import { naturalNumberRex } from "./Validations";
import {
  GAME_START,
  REPETATION_STR,
  MOVE_CAR_STR,
  WINNER_STR,
} from "./PrintStrings";

const { Console, Random } = MissionUtils;

class App {
  static printCarMoves(cars) {
    let runningResult = "";
    Object.keys(cars.obj).forEach((item) => {
      runningResult += MOVE_CAR_STR(item, cars.obj[item]);
    });
    Console.print(runningResult);
  }

  static getMoveArr(cars) {
    const moves = [];
    let i = 0;
    while (i < cars.len) {
      moves.push(Random.pickNumberInRange(1, 9));
      i += 1;
    }
    return moves;
  }

  running_race(cars, repetitions) {
    let i = 0;
    while (i < repetitions) {
      cars.move_cars(App.getMoveArr(cars));
      App.printCarMoves(cars);
      i += 1;
    }
    WINNER_STR(cars);
  }

  async play() {
    const input = await Console.readLineAsync(GAME_START);
    const carNames = input.split(",");
    const cars = new Cars(carNames);
    const repetitions = await Console.readLineAsync(REPETATION_STR);
    naturalNumberRex(repetitions);
    this.running_race(cars, repetitions);
  }
}

export default App;
