import { MissionUtils } from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;
import Cars from "./Cars";
import { nameValidation, naturalNumberRex, duplicateChecks } from "./Validations";
import {GAME_START, REPETATION_STR, MOVE_CAR_STR, WINNER_STR} from "./PrintStrings";
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
    WINNER_STR(cars);
  }

  async play() {
    const input = await Console.readLineAsync(GAME_START);
    const carNames = input.split(",");
    nameValidation(carNames);
    duplicateChecks(carNames);
    const cars = new Cars(input);
    const repetitions = await Console.readLineAsync(REPETATION_STR);
    naturalNumberRex(repetitions);
    this.running_race(cars, repetitions);
  }
}

export default App;