import { MissionUtils } from "@woowacourse/mission-utils";
import Cars from "./Cars";
import {
  nameValidation,
  naturalNumberRex,
  duplicateChecks,
} from "./Validations";
import {
  GAME_START,
  REPETATION_STR,
  MOVE_CAR_STR,
  WINNER_STR,
} from "./PrintStrings";

const { Console, Random } = MissionUtils;

class App {
  printCarMoves(cars) {
    let runningResult = "";
    Object.keys(cars.obj).forEach((item) => {
      runningResult += MOVE_CAR_STR(item, cars.obj[item]);
    });
    Console.print(runningResult);
  }

  getMoveArr(cars) {
    const moves = [];
    for (let i = 0; i < cars.len; i += 1) {
      moves.push(Random.pickNumberInRange(1, 9));
    }
    return moves;
  }

  running_race(cars, repetitions) {
    for (let i = 0; i < repetitions; i += 1) {
      cars.move_cars(this.getMoveArr(cars));
      this.printCarMoves(cars);
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
